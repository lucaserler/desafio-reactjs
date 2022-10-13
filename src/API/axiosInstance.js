import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL: "http://34.132.94.119:8080",
});

export default AxiosInstance;