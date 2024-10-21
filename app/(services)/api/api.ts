import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://7x1rcvfz-3000.inc1.devtunnels.ms', // Ensure the baseURL is correct for the environment you're working in
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
