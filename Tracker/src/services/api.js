// api.js

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const api = axios.create({
  baseURL: 'https://pricewiz.pythonanywhere.com/api/', // Replace with your API base URL
});

// Request interceptor
api.interceptors.request.use(
  async (config) => {
    // Check if a login token exists in AsyncStorage or any other storage mechanism of your choice
    const userToken = await AsyncStorage.getItem('userAccessToken');

    if (userToken) {
      // If a token exists, add it as a header to the API request
      config.headers = {
        Authorization: `Bearer ${userToken}`,
      };
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export default api;
