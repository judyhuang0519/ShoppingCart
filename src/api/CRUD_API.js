import { Promise } from 'core-js'
import {get,post} from '../axios/request'
//import qs from 'qs'
//const url = "/item"
export async function create(table,data){
    try {
        //console.log("[[")
        let response = await post(`/${table}`,data)
        return res_process(response.data)
    } catch (error) {
        errorHandler(error)
        return Promise.reject(error)
    }
}
export async function read(table,params){
    try {
        //console.log("[[")
        let response = await get(`/${table}`,params)
        return res_process(response.data)
    } catch (error) {
        errorHandler(error)
        return Promise.reject(error)
    }
}
export async function fetch(table){
    try {
        //console.log("[[")
        let response = await get(`/${table}/all`)
        //check(response)
        //console.log(response)
        /*console.log(typeof(response.data))*/
        return res_process(response.data)
    } catch (error) {
        errorHandler(error)
        return Promise.reject(error)
    }
}

export async function add(table, add_data){
    try {
        //req_data = check(data)
        console.log(add_data)
        let response = await post(`/${table}/add`, add_data)
        //console.log(response.data)
        console.log(response)
        return res_process(response)
    } catch (error) {
        errorHandler(error)
        return Promise.reject(error)
    }
}
export async function del(table,params_data){
    try {
        //console.log("del"+url)
        console.log("B")
        console.log(params_data)
        
        console.log("A")
        //let params = 
        //console.log(key)
        //let params = qs.stringify(params_data)
        //console.log(params_data)
        let response = await get(`/${table}/del`,params_data)
        //check(response)
        
        //let data = response.data
        
        return res_process(response.data)
    } catch (error) {
        errorHandler(error)
        return Promise.reject(error)
    }
}

export async function del_all(table){
    try {
        let response = await get(`/${table}/del`)
        return res_process(response.data)
    } catch (error) {
        //console.log("qqq")
        errorHandler(error)
        return Promise.reject(error)
    }
}
export async function update(table, update_data){
    try {
        //req_data = check(data)
        console.log(update_data)
        let response = await post(`/${table}/update`, update_data)
        //console.log(response.data)
        console.log(response)
        return res_process(response)
    } catch (error) {
        errorHandler(error)
        return Promise.reject(error)
    }
}
export async function search(table,params_data){
    try {
        //let params=qs.stringify(params_data)
        //console.log("del"+url)
        //console.log(params)
        let response = await get(`/${table}/search`,params_data)
        //check(response)
        
        //let data = response.data
        
        return res_process(response.data)
    } catch (error) {
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