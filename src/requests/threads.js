import Axios from "@/axios";

export let threadsListRequest = (page)=>{
    return  Axios.get(`threads?page=${page}`);
}

export let createNewThread = (formData)=>{
    return Axios.post('threads' , formData);
}