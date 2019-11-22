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
}
