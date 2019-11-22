import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorService } from './doctor.js';

$(document).ready(function() {
  $('form#userInput').submit(function() {
    event.preventDefault();

    const condition = $('#condition').val();
    $('#condition').val("");
    (async () => {
      let doctorService = new DoctorService();
      const response = await doctorService.getDoctor(condition);
      getDoctorElements(response);
    })();
    function getDoctorElements(response) {
      // $('#showGif').attr('src', response.data[randomNumber].images.original.url);
      // $("body").css("background-image", `url(${url})`);
    }

  });
});
