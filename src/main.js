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
      console.log(response);
      if (response.data.length === 0){
        $('#searchFail').html("Your search returned no results").val();
        $("#results").hide()
      } else {
        $('#searchFail').html(" ").val();
      }
      // $('showDrWebsite').html(`${response.data[0].practices[0].phones[0].number} <br>`).val();
      $('#showDrFirstName').html("Dr."+" "+`${response.data[0].profile.first_name}`+" ").val();
      $('#showDrName').html(`${response.data[0].profile.last_name} <br>`).val();
      $('#showDrPhone').html(`${response.data[0].practices[0].phones[0].number} <br>`).val();
      $('#showDrAddress').text(`${response.data[0].practices[0].visit_address.street}.`).val();
      $('#showDrAddressB').text(`${response.data[0].practices[0].visit_address.city} ${response.data[0].practices[0].visit_address.state_long}, ${response.data[0].practices[0].visit_address.zip}.`).val();
      if (response.data[0].practices[0].accepts_new_patients === true) {
        $('#showDrAvaiable').html("Curently accepts new patients").val();
      } else {
        $('#showDrAvaiable').html("Curently not accepting new patients").val();
      }
      $('#showDr2FirstName').html("Dr."+" "+`${response.data[1].profile.first_name}`+" ").val();
      $('#showDr2Name').html(`${response.data[1].profile.last_name} <br>`).val();
      $('#showDr2Phone').html(`${response.data[1].practices[0].phones[0].number} <br>`).val();
      $('#showDr2Address').text(`${response.data[1].practices[0].visit_address.street}.`).val();
      $('#showDr2AddressB').text(`${response.data[1].practices[0].visit_address.city} ${response.data[1].practices[0].visit_address.state_long}, ${response.data[1].practices[0].visit_address.zip}`).val();
      if (response.data[1].practices[0].accepts_new_patients === true) {
        $('#showDr2Avaiable').html("Curently accepts new patients").val();
      } else {
        $('#showDr2Avaiable').html("Curently not accepting new patients").val();
      }
      $('#showDr3FirstName').html("Dr."+" "+`${response.data[2].profile.first_name}`+" ").val();
      $('#showDr3Name').html(`${response.data[2].profile.last_name} <br>`).val();
      $('#showDr3Phone').html(`${response.data[2].practices[0].phones[0].number} <br>`).val();
      $('#showDr3Address').text(`${response.data[2].practices[0].visit_address.street}.`).val();
      $('#showDr3AddressB').text(`${response.data[2].practices[0].visit_address.city} ${response.data[2].practices[0].visit_address.state_long}, ${response.data[2].practices[0].visit_address.zip}`).val();
      if (response.data[2].practices[0].accepts_new_patients === true) {
        $('#showDr3Avaiable').html("Curently accepts new patients").val();
      } else {
        $('#showDr3Avaiable').html("Curently not accepting new patients").val();
      }
      $('#showDr4FirstName').html("Dr."+" "+`${response.data[3].profile.first_name}`+" ").val();
      $('#showDr4Name').html(`${response.data[3].profile.last_name} <br>`).val();
      $('#showDr4Phone').html(`${response.data[3].practices[0].phones[0].number} <br>`).val();
      $('#showDr4Address').text(`${response.data[3].practices[0].visit_address.street}.`).val(); $('#showDr4AddressB').text(`${response.data[3].practices[0].visit_address.city} ${response.data[3].practices[0].visit_address.state_long}, ${response.data[3].practices[0].visit_address.zip}`).val();
      if (response.data[3].practices[0].accepts_new_patients === true) {
        $('#showDr4Avaiable').html("Curently accepts new patients").val();
      } else {
        $('#showDr4Avaiable').html("Curently not accepting new patients").val();
      }
      $('#showDr5FirstName').html("Dr."+" "+`${response.data[4].profile.first_name}`+" ").val();
      $('#showDr5Name').html(`${response.data[4].profile.last_name} <br>`).val();
      $('#showDr5Phone').html(`${response.data[4].practices[0].phones[0].number} <br>`).val();
      $('#showDr5Address').text(`${response.data[4].practices[0].visit_address.street}.`).val();
      $('#showDr5AddressB').text(`${response.data[4].practices[0].visit_address.city} ${response.data[4].practices[0].visit_address.state_long}, ${response.data[4].practices[0].visit_address.zip}`).val();
      if (response.data[4].practices[0].accepts_new_patients === true) {
        $('#showDr5Avaiable').html("Curently accepts new patients").val();
      } else {
        $('#showDr5Avaiable').html("Curently not accepting new patients").val();
      }
      $('#showDr6FirstName').html("Dr."+" "+`${response.data[5].profile.first_name}`+" ").val();
      $('#showDr6Name').html(`${response.data[5].profile.last_name} <br>`).val();
      $('#showDr6Phone').html(`${response.data[5].practices[0].phones[0].number} <br>`).val();
      $('#showDr6Address').text(`${response.data[5].practices[0].visit_address.street}.`).val();
      $('#showDr6AddressB').text(`${response.data[0].practices[0].visit_address.city} ${response.data[5].practices[0].visit_address.state_long}, ${response.data[0].practices[0].visit_address.zip}`).val();
      if (response.data[5].practices[0].accepts_new_patients === true) {
        $('#showDr6Avaiable').html("Curently accepts new patients").val();
      } else {
        $('#showDr6Avaiable').html("Curently not accepting new patients").val();
      }
      $('#showDr7FirstName').html("Dr."+" "+`${response.data[6].profile.first_name}`+" ").val();
      $('#showDr7Name').html(`${response.data[6].profile.last_name} <br>`).val();
      $('#showDr7Phone').html(`${response.data[6].practices[0].phones[0].number} <br>`).val();
      $('#showDr7Address').text(`${response.data[6].practices[0].visit_address.street}.`).val();
      $('#showDr7AddressB').text(`${response.data[0].practices[0].visit_address.city} ${response.data[6].practices[0].visit_address.state_long}, ${response.data[0].practices[0].visit_address.zip}`).val();
      if (response.data[6].practices[0].accepts_new_patients === true) {
        $('#showDr7Avaiable').html("Curently accepts new patients").val();
      } else {
        $('#showDr7Avaiable').html("Curently not accepting new patients").val();
      }
      $('#showDr8FirstName').html("Dr."+" "+`${response.data[7].profile.first_name}`+" ").val();
      $('#showDr8Name').html(`${response.data[7].profile.last_name} <br>`).val();
      $('#showDr8Phone').html(`${response.data[7].practices[0].phones[0].number} <br>`).val();
      $('#showDr8Address').text(`${response.data[7].practices[0].visit_address.street}.`).val();
      $('#showDr8AddressB').text(`${response.data[0].practices[0].visit_address.city} ${response.data[7].practices[0].visit_address.state_long}, ${response.data[0].practices[0].visit_address.zip}`).val();
      if (response.data[7].practices[0].accepts_new_patients === true) {
        $('#showDr8Avaiable').html("Curently accepts new patients").val();
      } else {
        $('#showDr8Avaiable').html("Curently not accepting new patients").val();
      }
    }
  });
});

//attempt at wrinting function to search by condition

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


// Code to display 2 more doctors on dom//
// $('#showDr9FirstName').html("Dr."+" "+`${response.data[8].profile.first_name}`+" ").val();
// $('#showDr9Name').html(`${response.data[8].profile.last_name} <br>`).val();
// $('#showDr9Phone').html(`${response.data[8].practices[0].phones[0].number} <br>`).val();
// $('#showDr9Address').text(`${response.data[8].practices[0].visit_address.street}.`).val();
// $('#showDr9AddressB').text(`${response.data[0].practices[0].visit_address.city} ${response.data[8].practices[0].visit_address.state_long}, ${response.data[0].practices[0].visit_address.zip}`).val();
// if (response.data[8].practices[0].accepts_new_patients === true) {
  //   $('#showDr9Avaiable').html("Curently accepts new patients").val();
  // } else {
    //   $('#showDr9Avaiable').html("Curently not accepting new patients").val();
    // }
    // $('#showDr10FirstName').html("Dr."+" "+`${response.data[9].profile.first_name}`+" ").val();
    // $('#showDr10Name').html(`${response.data[9].profile.last_name} <br>`).val();
    // $('#showDr10Phone').html(`${response.data[9].practices[0].phones[0].number} <br>`).val();
    // $('#showDr10Address').text(`${response.data[9].practices[0].visit_address.street}.`).val();
    // $('#showDr10AddressB').text(`${response.data[0].practices[0].visit_address.city} ${response.data[9].practices[0].visit_address.state_long}, ${response.data[0].practices[0].visit_address.zip}`).val();
    // if (response.data[9].practices[0].accepts_new_patients === true) {
      //   $('#showDr10Avaiable').html("Curently accepts new patients").val();
      // } else {
        //   $('#showDr10Avaiable').html("Curently not accepting new patients").val();
        // }
