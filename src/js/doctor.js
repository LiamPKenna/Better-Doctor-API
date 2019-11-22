export class Doctor {
  constructor(doc) {
    this.first = doc.profile.first_name;
    this.last = doc.profile.last_name;
    this.address = doc.practices[0].visit_address;
    this.phone = doc.practices[0].phones[0].number;
    this.web = this.findWebsite(doc);
    this.newPatients = doc.practices[0].accepts_new_patients;
  }

  findWebsite(doc) {
    if (doc.practices[0].website) {
      return doc.practices[0].website;
    } else {
      for (var i = 0; i < doc.practices.length; i++) {
        if (doc.practices[i].website) return doc.practices[i].website;
      }
      return false;
    }
  }
}
