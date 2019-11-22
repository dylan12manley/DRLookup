export class DoctorService {
  async getDoctor(koanNumber) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=george&sort=rating-asc&limit=20&user_key=efc5d491edbe141ba6354071817db33f`);
      // if (response === "undefined") {
      //   console.log("Poem not found");
      // }
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}
