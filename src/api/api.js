import axios from 'axios';

const api = axios.create({
  baseURL: 'https://filmineos.herokuapp.com',
});

export default api;
