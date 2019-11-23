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
    // const docName = $('#condition').val();
    // $('#condition').val("");

    (async () => {
      let doctorService = new DoctorService();
      const response = await doctorService.getDoctor(docName);
      getDoctorElements(response);
    })();
    function getDoctorElements(response) {
      console.log(response.data[0].practices.name);
      $('#showDrName').text(`Dr. ${response.data[0].profile.last_name}`).val();
      $('#showDrName').text(`Dr. ${response.data[1].profile.last_name}`).val();
      $('#showDrName').text(`Dr. ${response.data[2].profile.last_name}`).val();
      $('#showDrName').text(`Dr. ${response.data[3].profile.last_name}`).val();
      $('#showDrName').text(`Dr. ${response.data[4].profile.last_name}`).val();
      $('#showDrName').text(`Dr. ${response.data[5].profile.last_name}`).val();
      $('#showDrName').text(`Dr. ${response.data[6].profile.last_name}`).val();
      $('#showDrName').text(`Dr. ${response.data[7].profile.last_name}`).val();
      $('#showDrName').text(`Dr. ${response.data[8].profile.last_name}`).val();
      $('#showDrName').text(`Dr. ${response.data[9].profile.last_name}`).val();
      // $('#showDrFirstName').text(`${response.data[0].profile.first_name}`).val();
      // $('#showDrAddress').text(`${response.data[0].profile.address}`).val();
      // $('').attr('src', response.data[0].profile.last_name);
      // $("body").css("background-image", `url(${url})`);
    }

    // const condition = $('#condition').val();
    // $('#condition').val("");
    // (async () => {
    //   let doctorService = new DoctorService();
    //   const response = await doctorService.getDoctor(condition);
    //   getDoctorElements(response);
    // })();
    // function getDoctorElements(response) {
    //   $('#showDrAddress').attr('src', response.data[randomNumber].images.original.url);
    //   // $("body").css("background-image", `url(${url})`);
    // }

  });
});
