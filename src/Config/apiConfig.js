import axios from "axios";

const jwtToken = localStorage.getItem("jwt");

export const API_BASE_URL = 'https://twitter-server-production-aa83.up.railway.app';

export const api = axios.create({
  baseURL: API_BASE_URL, 
  headers: {
    'Authorization': `Bearer ${jwtToken}`,
    'Content-Type': 'application/json',
  },
});

// Now you can use `api` to make requests to your server
