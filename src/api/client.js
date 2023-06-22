import axios from 'axios';

const client = axios.create({
  baseURL: 'http://192.168.100.209:4848/api', // Replace with your API base URL
  headers: {
    'Cache-Control': 'no-cache', // Add the Cache-Control header
  },
});

export default client;
