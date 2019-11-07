import Caller from "./ApiCaller";

const prefix = "questions/";

export default {
  getAll(id) {
    return Caller(`${prefix}${id}`, "GET");
  }
};
