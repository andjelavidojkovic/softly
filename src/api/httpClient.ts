import axios from 'axios';

const httpClient = axios.create({
    baseURL: process.env.REACT_APP_END_POINT,
});

export default httpClient;
