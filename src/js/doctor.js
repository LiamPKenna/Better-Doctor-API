export class Doctor {
  constructor(doc) {
    this.first = doc.profile.first_name;
    this.last = doc.profile.last_name;
    this.address = doc.practices[0].visit_address;
    this.phone = doc.practices[0].phones[0].number;
    this.web = doc.practices[0].website;
    this.newPatients = doc.practices[0].accepts_new_patients;
  }
}
