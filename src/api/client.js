import axios from 'axios';

const client = axios.create({
  baseURL: 'https://computer-system-architecture.onrender.com/api', // Replace with your API base URL
  headers: {
    'Cache-Control': 'no-cache', // Add the Cache-Control header
  },
});

export default client;
