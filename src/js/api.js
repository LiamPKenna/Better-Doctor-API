export class ApiRequest {
  constructor() {

  }

  getDoctorsByIssue(issue) {
    const url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${issue}&location=45.520%2C%20-122.677%2C100&user_location=45.520%2C%20-122.677&skip=0&limit=10&user_key=${process.env.API_KEY}`;
    console.log(url);
  }
}
