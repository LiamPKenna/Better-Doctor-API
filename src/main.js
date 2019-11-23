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

  const addSpecialties = async () => {
    const specialtyInputs = await doctorSearch.getSpecialties();
    if (specialtyInputs) {
      $('#specialty').append(specialtyInputs);
    } else {
      $('.specialties').hide();
    }
  };

  const verifyZip = (zipInput) => {
    return (zipInput.length === 5) ? zipInput : '';
  };

  const getUserInputQuery = () => {
    const specialtyInput = $('#specialty').val();
    const issueInput = $('#issue').val();
    const zipInput = verifyZip($('#zip').val());
    const fullNameInput = $('#fullName').val();
    const firstInput = $('#firstName').val();
    const lastInput = $('#lastName').val();
    return new Query(issueInput, fullNameInput, firstInput, lastInput, zipInput, specialtyInput);
  };

  $('#search-form').submit((event) => {
    event.preventDefault();
    const thisQuery = getUserInputQuery();
    $('.user-input').hide();
    const loadMessage = '<div class="load"><h2>Loading . . .</h2></div>';
    $('.doc-cards').html(loadMessage);
    $('#restart').fadeIn();
    $('.doc-cards').fadeIn();
    doctorSearch.getDoctorByQuery(thisQuery)
      .then((docHtml) => {
        $('.doc-cards').html(docHtml);
      });
  });

  $('#restart').click(() => {
    $('#restart').hide();
    $('.doc-cards').hide();
    $('.user-input').fadeIn();
  });

  const doctorSearch = new DoctorSearch();
  addSpecialties();

});
