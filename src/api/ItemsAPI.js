//import request from '@/axios/axios'
import { Promise } from 'core-js'
import {get,post,del,patch} from '../axios/request'
const url = "/item"

export async function fetch(){
    try {
        let response = await get(`${url}`)
        return res_process(response.data)
    } catch (error) {
        errorHandler(error)
        return Promise.reject(error)
    }
}
export async function search(params){
    try {
        let response = await get(`${url}`,params)
        return res_process(response.data)
    } catch (error) {
        errorHandler(error)
        return Promise.reject(error)
    }
}
export async function add(add_data){
    try {
        let response = await post(`${url}`,add_data)
        return res_process(response.data)
    } catch (error) {
        errorHandler(error)
        return Promise.reject(error)
    }
}

export async function del_(params){
    try {
        let response = await del(`${url}`,params)
        return res_process(response.data)
    } catch (error) {
        errorHandler(error)
        return Promise.reject(error)
    }
}
export async function del_all(){
    try {
        let response = await del(`${url}`)
        return res_process(response.data)
    } catch (error) {
        errorHandler(error)
        return Promise.reject(error)
    }
}
export async function update(update_data){
    try {
        let response = await patch(`${url}`,update_data)
        return res_process(response.data)
    } catch (error) {
        errorHandler(error)
        return Promise.reject(error)
    }
}

function res_process(res){
    let msg = ""
    if(res.error){
        msg += res.error
        msg+="\n"
        console.log(msg)
    }
    if(res.msg){
        msg+=res.msg
        msg+='\n'
    }
    let result ={msg:msg}
    if(res.data){
        result.data = JSON.parse(res.data)
        return Promise.resolve(result)
    }else{
        return Promise.reject(result)
    }
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
