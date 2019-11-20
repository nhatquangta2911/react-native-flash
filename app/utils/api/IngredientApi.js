import Caller from "../api/ApiCaller";

const prefix = "ingredients/";

export default {
  getAll() {
    return Caller(prefix, "GET");
  }
};
