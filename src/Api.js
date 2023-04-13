import axios from "axios";

const Api = axios.create({baseURL: `${process.env.SERVER_BASE_URL}`});

export default Api;