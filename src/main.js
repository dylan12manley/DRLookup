import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorService } from './doctor.js';

$(document).ready(function() {
  $('form#userInput').submit(function() {
    event.preventDefault();

    const searchKeyword = $('#searchKeyword').val();
    $('#searchKeyword').val("");
    (async () => {
      let doctorService = new DoctorService();
      const response = await doctorService.getDoctor(searchKeyword);
      getDoctorElements(response);
    })();
    function getDoctorElements(response) {
      const url = response[randomNumberTwo].urls.regular;
      // $('#showGif').attr('src', response.data[randomNumber].images.original.url);
      // $("body").css("background-image", `url(${url})`);
    }

  });
});
