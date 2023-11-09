// src/api.js

import axios from 'axios';
import keycloak from './keycloak';

const instance = axios.create({
  baseURL: 'http://localhost:3000', // Базовый URL бэкенд-сервера
});

instance.interceptors.request.use((config) => {
  const token = keycloak.token;
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

export default instance;
