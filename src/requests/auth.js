import Axios, {baseUrl} from "@/axios";
import axios from "axios";

export let RegisterRequest = (formData)=> {
        return Axios.post('auth/register', formData)
};


export let LoginRequest = async (formData)=>{
    if (!await checkAuth()) {
    }
    await axios.get(`${baseUrl}csrf-cookie`).then(res => {
        return Axios.post('auth/login', formData)
    })
}

export let LogoutRequest = ()=>{
    return Axios.post('auth/logout');
}


export let GetUserData = async ()=>{
    if (await checkAuth()){
            return Axios.get('auth/user')
    }
}

export let checkAuth = async ()=>{
    let isAuth = false;

    await Axios.get('auth/user')
        .then(res => isAuth = true)
        .catch(err => isAuth = false)


    localStorage.setItem('isAuth', isAuth ? 'true' : 'false')

    return isAuth;
};