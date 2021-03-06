export class Query {
  constructor(query, docName, docFirst, docLast, zip, specialty) {
    this.query = (query) ? `query=${query}&` : '';
    this.docName = (docName) ? `name=${docName}&` : '';
    this.docFirst = (docFirst) ? `first_name=${docFirst}&` : '';
    this.docLast = (docLast) ? `last_name=${docLast}&` : '';
    this.zip = (zip) ? zip : '';
    this.specialty = (specialty) ? `specialty_uid=${specialty}&` : '';
  }
}
