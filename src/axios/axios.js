import axios from "axios";

const service = axios.create({
    baseURL : 'api',
    headers: {
        "Content-Type": "application/json;charset=UTF-8",
     },
    responseType: "json",
    timeout: 10000,
    withCredentials: true
   
})
service.interceptors.request.use(
    (request) => {
        return request;
    },
    (error) => {
        return Promise.reject(error);
    }
)
service.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
)
export default service;