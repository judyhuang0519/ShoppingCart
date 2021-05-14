import request from '@/axios/axios'
import { Promise } from 'core-js'
import {get,post} from '../axios/request'
const url = "/item"
export async function fetch(){
    try {
        let response = await get(`${url}/all`)
        //check(response)
        //console.log(response)
        /*console.log(typeof(response.data))*/
        return res_process(response.data)
    } catch (error) {
        errorHandler(error)
        return Promise.reject(error)
    }
}
export async function add(add_data){
    try {
        //req_data = check(data)
        let response = await post(`${url}/add`,add_data)
        return res_process(response.data)
    } catch (error) {
        errorHandler(error)
        return Promise.reject(error)
    }
}
export async function del(id){
    try {
        let response = await get(`${url}/del?id=${id}`)
        //check(response)
        
        //let data = response.data
        
        return res_process(response.data)
    } catch (error) {
        errorHandler(error)
        return Promise.reject(error)
    }
}
export async function del_all(){
    try {
        let response = await get(`${url}/del`)
        console.log(response)
        //check(response)
        /*let data = response.data
        return data*/
        
        console.log(await res_process(response.data))
        
        return res_process(response.data)
    } catch (error) {
        console.log("qqq")
        errorHandler(error)
        return Promise.reject(error)
    }
}
/*export async function add (data){
    try {
        //req_data = check(data)
        let response = await post(`${url}/add`,data)
        return response
    } catch (error) {
        errorHandler(error)
        return error
    }
}*/
function res_process(res){
    console.log(res)
    if(res.error){
        console.log("res has error")
        console.log(res.error)
        if(res.msg){
            console.log("Error Msg:\n"+res.msg)
        }
        return Promise.reject(res.error)
    }else{
        if(res.msg){
            console.log(res.msg)
        }else{
            console.log("no msg")
        }
        if(res.data){
            return Promise.resolve(JSON.parse(res.data))
        }else{
            return Promise.resolve(res)
        }
    }
   
}
export function postItems(data){
    console.log(data)
    return new Promise((resolve,reject)=>{
        request.post('/item',data)
        .then((response)=>{
            console.log('getItems success');
            console.log(typeof(response.data));
            resolve(response.data);
        })
        .catch((error)=>{
            errorHandler(error);
            reject(error);
        })
    })
}
function errorHandler(error){
    if(error.response){
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.header);
    }else if(error.request){
        console.log(error.request);
    }else{
        console.log('Error', error.message);
    }
}
    /*request.get('/items')
    .then((response)=>{
        console.log('getItems success');
        console.log(response);
    })
    .catch((error)=>{
        if(error.response){
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.header);
        }else if(error.request){
            console.log(error.request);
        }else{
            console.log('Error', error.message);
        }
        
    })*/