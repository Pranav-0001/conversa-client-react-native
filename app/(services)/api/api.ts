import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL, 
});

api.interceptors.request.use(
   (config) => {
    console.log({ url: process.env.EXPO_PUBLIC_API_URL })
    return config;
  },
  (error) => {
    console.log('error', error);
    // Return any request errors
    return Promise.reject(error);
  }
);
