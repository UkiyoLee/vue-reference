import axios from 'axios';

const request = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:3000',
  timeout: 10000
});

request.interceptors.request.use(conf => conf, error => Promise.reject(error));
request.interceptors.response.use(response => response.data, error => Promise.reject(error));

export default request;