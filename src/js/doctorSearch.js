import { ApiRequest } from './api.js';
import { Doctor } from './doctor.js';
import { TemplateTool } from './templating.js';

export class DoctorSearch {
  constructor() {
    this.apiRequest = new ApiRequest();
    this.templateTool = new TemplateTool();
  }

  async getDoctorByQuery(query) {
    let location = (!query.zip) ?
      [45.515,-122.643] :
      await this.apiRequest.getLocation(query.zip);
    if (!location) {
      return `
        <div class="error">
          <h2>We're sorry! ${query.zip} is not a valid zip code! Please try again!</h2>
        </div>
      `;
    }
    const url = `https://api.betterdoctor.com/2016-03-01/doctors?${query.docName}${query.docFirst}${query.docLast}${query.query}${query.specialty}location=${location[0]}%2C%20${location[1]}%2C100&user_location=${location[0]}%2C%20${location[1]}&${query.docGender}sort=distance-asc&skip=0&limit=50&user_key=${process.env.API_KEY}`;
    return this.apiRequest.getApiResponse(url)
      .then((response) => {
        const doctors = response.data;
        if (doctors.length > 0) {
          const docDetails = [];
          doctors.forEach((doc) => {
            const doctor = new Doctor(doc);
            const docCard = this.templateTool.makeDoctorCard(doctor);
            docDetails.push(docCard);
          });
          return docDetails.join('');
        } else {
          return `
            <div class="error">
              <h2>No doctors were found that met your criteria. Sorry!</h2>
            </div>
          `;

        }
      });
  }

  async getSpecialties() {
    const url = `https://api.betterdoctor.com/2016-03-01/specialties?user_key=${process.env.API_KEY}`;
    return this.apiRequest.getApiResponse(url)
      .then((response) => {
        if (!response.data) return false;
        const specialties = response.data;
        let result = '';
        specialties.forEach(specialty => {
          const thisInput = this.templateTool.makeSpecInput(specialty);
          result += thisInput;
        });
        return result;
      });
  }
}

// first name, last name, address, phone number, website and whether or not the doctor is accepting new patients
