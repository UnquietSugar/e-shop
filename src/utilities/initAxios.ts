import axios from 'axios';

const initAxios = () => {
	axios.defaults.baseURL = process.env.REACT_APP_API_URL;
};

export default initAxios;
