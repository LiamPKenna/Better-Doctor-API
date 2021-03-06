import { ApiRequest } from './api.js';
import { Doctor } from './doctor.js';
import { TemplateTool } from './templating.js';

export class DoctorSearch {
  constructor() {
    this.apiRequest = new ApiRequest();
    this.templateTool = new TemplateTool();
  }

  async getDoctorByQuery(query) {
    const zipUrl = (query.zip) ? this.templateTool.makeZipUrl(query.zip) : false;
    const location = (!query.zip) ?
      [45.521,-122.678] :
      await this.apiRequest.getLocation(query.zip, zipUrl);
    if (!location) {
      return this.templateTool.makeZipError(query.zip, this.apiRequest.zipResponseStatus);
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
      })
      .catch((error) => alert(error));
  }

  async getSpecialties() {
    const url = this.templateTool.makeSpecUrl();
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
      })
      .catch((error) => alert(error));
  }
}
