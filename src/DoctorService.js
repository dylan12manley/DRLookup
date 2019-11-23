export class DoctorService {
  async getDoctor(docName) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?user_key=${process.env.API_KEY}&name=${docName}&sort=rating-asc&location=45.523064,-122,100`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}
