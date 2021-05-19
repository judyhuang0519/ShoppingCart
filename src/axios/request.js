import request from '@/axios/axios'


export function get(url,params){
    return new Promise((resolve,reject)=>{
        request.get(url,{params:params})
        .then((response)=>{
            resolve(res_process(response.data));
        })
        .catch((error)=>{
            errorHandler(error);
            reject(error);
        })
    })
}
export function post(url,data){
    return new Promise((resolve,reject)=>{
        request.post(url,data)
        .then((response)=>{
            resolve(res_process(response.data));
        })
        .catch((error)=>{
            errorHandler(error);
            reject(error);
        })
    })
}
export function del(url,params){
    return new Promise((resolve,reject)=>{
        console.log("%")
        request.delete(url,{params:params})
        .then((response)=>{
            resolve(res_process(response.data));
        })
        .catch((error)=>{
            errorHandler(error);
            reject(error);
        })
    })
}
export function patch(url,data){
    return new Promise((resolve,reject)=>{
        request.patch(url,data)
        .then((response)=>{
            resolve(res_process(response.data));
        })
        .catch((error)=>{
            errorHandler(error);
            reject(error);
        })
    })
}
function res_process(res){
    console.log(res)
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