import axios from 'axios';

// PROD
const baseUrl = 'http://shawnta.tech/api';

// DEV (Only with ADB Virtual Machine)
// const baseUrl = "http://192.168.20.216:5000/api";

export default function Caller(
  endpoint,
  method = 'GET',
  body = {},
  id = '',
  token = ''
) {
  return axios(`${baseUrl}/${endpoint}`, {
    method: method,
    data: body,
    headers: { id: id, 'x-access-token': token }
  });
}
