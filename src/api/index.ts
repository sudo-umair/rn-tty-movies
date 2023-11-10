import { API } from '@/constants/api';
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: API.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${API.BEARER_TOKEN}`,
  },
  params: {
    api_key: API.API_KEY,
  },
});

export default axiosClient;
