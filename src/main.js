// UTILITIES
import $ from 'jquery';
import 'bootstrap';
import './css/bootstrap.min.css';
import './css/styles.css';

// MAIN LOGIC
import { DoctorSearch } from './js/doctor.js';

// USER INTERFACE
$(document).ready(function(){

  const doctorSearch = new DoctorSearch();
  console.log(`HELLO!`);
  console.log(process.env.API_KEY);



});