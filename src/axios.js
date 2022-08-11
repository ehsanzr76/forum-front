import axios from "axios";


const Axios = axios.create({
    baseURL: 'http://localhost:80/api/v1/'
});
Axios.defaults.withCredentialsn = true;
export default Axios;