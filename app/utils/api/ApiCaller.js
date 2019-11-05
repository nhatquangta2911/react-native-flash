import axios from "axios";

const baseUrl = "http://54.169.190.136:5000/api";

export default function Caller(
  endpoint,
  method = "GET",
  body = {},
  id = "",
  token = ""
) {
  return axios(`${baseUrl}/${endpoint}`, {
    method: method,
    data: body,
    headers: { id: id, "x-access-token": token }
  });
}
