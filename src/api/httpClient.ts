import axios from 'axios';

const httpClient = axios.create({
    baseURL: process.env.REACT_APP_END_POINT,
});


httpClient.interceptors.request.use(function (config) {
    // Do something before request is sent

    const token = localStorage.getItem('token');
    if (token) config = {
        ...config,
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }


    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

export default httpClient;
