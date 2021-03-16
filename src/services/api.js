import axios from 'axios';

const apiV1 = axios.create({
  baseURL: 'http://localhost:5000/v1/public/'
})

export default apiV1;
