import axios from 'axios';
import { AsyncStorage } from 'react-native';

const api = axios.create({
<<<<<<< HEAD
  baseURL: 'http://192.168.128.2:3333',
=======
  baseURL: 'http://192.168.0.109:3333',
>>>>>>> 34163896e13bc90393e93b656fb2848bf2abc158
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
