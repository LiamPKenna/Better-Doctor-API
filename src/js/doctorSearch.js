import { ApiRequest } from './api.js';
import { Doctor } from './doctor.js';

export class DoctorSearch {
  constructor() {
    this.apiRequest = new ApiRequest();
  }

  getDoctorByQuery(query) {
    const url = `https://api.betterdoctor.com/2016-03-01/doctors?${query.docName}${query.docFirst}${query.docLast}${query.query}location=45.520%2C%20-122.677%2C100&user_location=45.520%2C%20-122.677&${query.docGender}skip=0&limit=10&user_key=${process.env.API_KEY}`;
    this.apiRequest.getApiResponse(url)
      .then((response) => {
        const doctors = response.data;
        if (doctors.length > 0) {
          const docDetails = []
          doctors.forEach((doc) => {
            const doctor = {

            }

          });
        } else {
          console.log('NO RESULTS!');
        }
      });
  }
}

// first name, last name, address, phone number, website and whether or not the doctor is accepting new patients
