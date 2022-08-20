import axios from "axios";

export let baseUrl = 'http://localhost:80/api/';
const Axios = axios.create({
    baseURL: `${baseUrl}v1/`
});
Axios.defaults.withCredentials = true;
export default Axios;