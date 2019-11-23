export class ConditionService {
  async getCondition(condition) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${condition}&sort=rating-asc&limit=20&user_key=${process.env.API_KEY}`);
      let jsonifiedResponse = await response.json();
      console.log(jsonifiedResponse);
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}
