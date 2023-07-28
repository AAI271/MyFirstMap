import axios from 'axios';

const baseURL = 'http://router.project-osrm.org/';

const axiosInstance = axios.create({
    baseURL,
});

// You can set up any other default configurations for your axios instance here
// For example, headers, interceptors, etc.

export default axiosInstance;
