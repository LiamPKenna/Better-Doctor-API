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
      return this.templateTool.makeZipError(query.zip);
    }
    const url = this.templateTool.makeBetterDoctorUrl(query, location);
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
          return this.templateTool.makeNoDoctorError();
        }
      });
  }

  async getSpecialties() {
    const url = this.templateTool.makeZipUrl();
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
