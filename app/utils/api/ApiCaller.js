import axios from 'axios';

const baseUrl = 'https://localhost:3000/api';

export default function Caller(endpoint, method = 'GET', body = {}, token='') {
   return axios(
      `${baseUrl}/${endpoint}`,
      {
         method: method,
         data: body,
         headers: {'x-access-token': token}
      }
   );
};
