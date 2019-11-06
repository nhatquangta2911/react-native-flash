import Caller from "./ApiCaller";

const prefix = "users/";

export default {
  get(id) {
    return Caller(prefix + `user/${id}`, "GET");
  },
  submit(answer, id) {
    return Caller(prefix + "submit", "POST", answer, id);
  },
  submitInfo(info, id) {
    return Caller(prefix + `info/${id}`, "POST", info);
  }
};
