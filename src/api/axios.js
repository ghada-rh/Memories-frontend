import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://memories-smedia.herokuapp.com/',
});

export default instance;