import axios from 'axios';

const api = axios.create({
     baseURL: 'https://potychiptest.herokuapp.com'
});


export default api;