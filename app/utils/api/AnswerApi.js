import Caller from "../api/ApiCaller";

const prefix = "answers/";

export default {
  getMyAnswers(id) {
    return Caller(`${prefix}${id}`, "GET");
  }
};
