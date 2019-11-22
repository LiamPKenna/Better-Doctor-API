export class Doctor {
  constructor(doc) {
    this.first = doc.profile.first_name;
    this.last = doc.profile.last_name;
    this.image = doc.profile.image_url;
    this.address = doc.practices[0].visit_address;
    this.phone = this.formatPhone(doc.practices[0].phones[0].number);
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

  formatPhone(number) {
    const numArray = number.split('');
    const resultArray = ['('];
    for (let i = 0; i < 3; i++) {
      resultArray.push(numArray.shift());
    }
    resultArray.push(') ');
    for (let i = 0; i < 3; i++) {
      resultArray.push(numArray.shift());
    }
    resultArray.push('-');
    for (let i = 0; i < 4; i++) {
      resultArray.push(numArray.shift());
    }
    return resultArray.join('');
  }

}
