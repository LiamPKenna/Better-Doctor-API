export class TemplateTool {
  constructor() {

  }

  makeDoctorCard(docObj) {
    const newPatients = (docObj.newPatients) ?
      "Accepting new patients" :
      "No new patients";
    const result = `
      <div class="card dr-card">
        <div class="dr-info">
          <img class="headshot" src="${docObj.image}" alt="${docObj.first} ${docObj.last}">
          <div class="dr-details">
            <h5>${docObj.first} ${docObj.last}</h5>
            <p>Phone:<br>${docObj.phone}</p>
          </div>
        </div>
        <div class="dr-address">
          <p>
            ${docObj.address.street}<br>
            ${docObj.address.city} ${docObj.address.state} ${docObj.address.zip}
          </p>
          <p>${newPatients}</p>
        </div>
      </div>
    `;
    return result;
  }

  makeSpecInput(specialty) {
    return `
      <option value="${specialty.uid}">
        ${specialty.name}
      </option>
    `;
  }

  makeBetterDoctorUrl(query, location) {
    return `
      https://api.betterdoctor.com/2016-03-01/doctors?${query.docName}${query.docFirst}${query.docLast}${query.query}${query.specialty}location=${location[0]}%2C%20${location[1]}%2C100&user_location=${location[0]}%2C%20${location[1]}&${query.docGender}sort=distance-asc&skip=0&limit=50&user_key=${process.env.API_KEY}
    `;
  }

  makeSpecUrl() {
    return `
      https://api.betterdoctor.com/2016-03-01/specialties?user_key=${process.env.API_KEY}
    `;
  }

  makeZipError(badZip, error) {
    return `
      <div class="error">
        <h2>We're sorry! We were unable to look up ${badZip}! Please try again!</h2>
        <p>Error code: ${error}</p>
      </div>
    `;
  }

  makeNoDoctorError() {
    return `
      <div class="error">
        <h2>No doctors were found that met your criteria. Sorry!</h2>
      </div>
    `;
  }

  makeZipUrl(zip) {
    return `https://www.zipcodeapi.com/rest/${process.env.ZIP_KEY}/info.json/${zip}/degrees`;
  }

}
