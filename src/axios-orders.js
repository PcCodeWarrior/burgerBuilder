import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-1dfa5.firebaseio.com/'
});

export default instance;