import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorService } from './DoctorService.js';

$(document).ready(function() {
  $('form#userInput').submit(function() {
    event.preventDefault();

    const docName = $('#docName').val();
    $('#docName').val("");
    (async () => {
      let doctorService = new DoctorService();
      const response = await doctorService.getDoctor(condition);
      getDoctorElements(response);
    })();
    function getDoctorElements(response) {
      $('#showDrAddress').attr('src', response.data);
      // $("body").css("background-image", `url(${url})`);
    }

    const condition = $('#condition').val();
    $('#condition').val("");
    (async () => {
      let doctorService = new DoctorService();
      const response = await doctorService.getDoctor(condition);
      getDoctorElements(response);
    })();
    function getDoctorElements(response) {
      $('#showDrAddress').attr('src', response.data[randomNumber].images.original.url);
      // $("body").css("background-image", `url(${url})`);
    }

  });
});
