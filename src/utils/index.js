import axios from 'axios';

const CustomAxios = axios.create({
  baseURL: 'http://localhost:4896/',
  timeout: '4000',
});
export default CustomAxios;
