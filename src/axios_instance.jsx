import axios from 'axios';

// Create an instance of Axios with a base URL
const instance = axios.create({
  baseURL: 'http://localhost:5000'  // Note the forward slash after http:
});

export default instance;
