export class Query {
  constructor(query, docName, docFirst, docLast, docGender) {
    this.query = (query) ? `query=${query}&` : '';
    this.docName = (docName) ? `name=${docName}&` : '';
    this.docFirst = (docFirst) ? `first_name=${docFirst}&` : '';
    this.docLast = (docLast) ? `last_name=${docLast}&` : '';
    this.docGender = (docGender) ? `gender=${docGender}&` : '';
  }
}
