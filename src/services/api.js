import axios from 'axios';
import { AsyncStorage } from 'react-native';

const api = axios.create({
  baseURL: 'http://192.168.89.182:3333',
  timeout: 5000,
});

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('@DebApp:token');

  if (token != null) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
