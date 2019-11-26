export class ConditionService {
  async getCondition(condition) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${conditionSearch}&user_location=37.773%2C-122.413&sort=rating-desc&skip=0&limit=8&user_key=efc5d491edbe141ba6354071817db33f${process.env.API_KEY}`);
      let jsonifiedResponse = await response.json();
      console.log(jsonifiedResponse);
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}
