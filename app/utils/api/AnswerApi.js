import Caller from "../api/ApiCaller";

const prefix = "answers/";

export default {
  getMyAnswers(id, date) {
    return Caller(`${prefix}${id}/${date}`, "GET");
  }
};
