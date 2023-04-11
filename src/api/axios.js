import axios from 'axios';

// const BASE_URL = "http://localhost:4000/api/v1"
const BASE_URL = "https://portfolio-backend-30mp.onrender.com/api/v1"

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
        "content-type": "application/json"
    }
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = JSON.parse(localStorage?.getItem('token'));
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            // Handle unauthorized error
            // // console.log('Unauthorized error');
        }
        return Promise.reject(error);
    }
);

export default axiosInstance