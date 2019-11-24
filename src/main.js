import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorService } from './DoctorService.js';
import { ConditionService } from './ConditionService.js';

$(document).ready(function() {
  $('form#userInput').submit(function() {
    event.preventDefault();

    const docName = $('#docName').val();
    $('#docName').val("");

    (async () => {
      let doctorService = new DoctorService();
      const response = await doctorService.getDoctor(docName);
      getDoctorElements(response);
    })();
    function getDoctorElements(response) {
      $("#results").show()
      console.log(response.data[5]);
      $('#showDrFirstName').html("Dr."+" "+`${response.data[0].profile.first_name}`+" ").val();
      $('#showDrName').html(`${response.data[0].profile.last_name} <br>`).val();
      $('#showDrPhone').html(`${response.data[0].practices[0].phones[0].number} <br>`).val();
      $('#showDr2FirstName').html("Dr."+" "+`${response.data[1].profile.first_name}`+" ").val();
      $('#showDr2Name').html(`${response.data[1].profile.last_name} <br>`).val();
      $('#showDr2Phone').html(`${response.data[1].practices[0].phones[0].number} <br>`).val();
      $('#showDr3FirstName').html("Dr."+" "+`${response.data[2].profile.first_name}`+" ").val();
      $('#showDr3Name').html(`${response.data[2].profile.last_name} <br>`).val();
      $('#showDr3Phone').html(`${response.data[2].practices[0].phones[0].number} <br>`).val();
      $('#showDr4FirstName').html("Dr."+" "+`${response.data[3].profile.first_name}`+" ").val();
      $('#showDr4Name').html(`${response.data[3].profile.last_name} <br>`).val();
      $('#showDr4Phone').html(`${response.data[3].practices[0].phones[0].number} <br>`).val();
      $('#showDr5FirstName').html("Dr."+" "+`${response.data[4].profile.first_name}`+" ").val();
      $('#showDr5Name').html(`${response.data[4].profile.last_name} <br>`).val();
      $('#showDr5Phone').html(`${response.data[4].practices[0].phones[0].number} <br>`).val();
    }
    // $('#showDrFirstName').text(`Dr. ${response.data[0].profile.first_name}`).val();
    // console.log(response.data[0].profile);
    // $('#showDrAddress').text(`${response.data[0].profile.address}`).val();
    // $('').attr('src', response.data[0].profile.last_name);
    // $("body").css("background-image", `url(${url})`);

    // const condition = $('#condition').val();
    // $('#condition').val("");
    // (async () => {
    //   let conditionService = new ConditionService();
    //   const response = await conditionService.getCondition(condition);
    //   getConditionElements(response);
    // })();
    // function getConditionElements(response) {
    //   $('#showCondition').attr('src', response.data[0].images.original.url);
    //   // $("body").css("background-image", `url(${url})`);
    // }

  });
});
