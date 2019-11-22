// UTILITIES
import $ from 'jquery';
import 'bootstrap';
import './css/bootstrap.min.css';
import './css/styles.css';

// MAIN LOGIC
import { DoctorSearch } from './js/doctorSearch.js';
import { Query } from './js/query.js';

// USER INTERFACE
$(document).ready(function(){

  const doctorSearch = new DoctorSearch();
  const query = new Query('','','','','',97214);

  $('#search').click(() => {
    doctorSearch.getDoctorByQuery(query)
      .then((docHtml) => {
        console.log(docHtml);
        $('.doc-cards').append(docHtml);
        $('.doc-cards').append('<h1>test</h1>');
      });
  });




});
