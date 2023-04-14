import axios from "axios";

const baseURL = `${process.env.REACT_APP_SERVER_BASE_URL}`
const Api = axios.create({
	baseURL: baseURL,
	headers: {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${localStorage.getItem('token')}`
	}
});

export default Api;