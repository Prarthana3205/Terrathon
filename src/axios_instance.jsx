import axios from 'axios';

// Create an instance of Axios with a base URL
const instance = axios.create({
  baseURL: 'http://localhost:5000' // Replace with the URL of your Flask backend
});

export default instance;
