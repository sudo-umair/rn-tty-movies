import { API } from '@/constants/api';
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: API.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    api_key: API.API_KEY,
  },
});

export default axiosClient;
