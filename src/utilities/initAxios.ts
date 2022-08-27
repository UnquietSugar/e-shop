import axios from 'axios';

const initAxios = () => {
	axios.defaults.baseURL = 'http://localhost:3001/';
};

export default initAxios;
