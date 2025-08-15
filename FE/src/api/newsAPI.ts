import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
    headers:{
        'Content-Type': 'apllication/json'
    }
})

export default apiClient