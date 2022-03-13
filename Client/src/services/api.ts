import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:5555',
});

export default api;