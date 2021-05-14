import request from '@/axios/axios'


export function get(url,params){
    return new Promise((resolve,reject)=>{
        request.get(url,{params:params})
        .then((response)=>{
            resolve(response);
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
            resolve(response.data);
        })
        .catch((error)=>{
            errorHandler(error);
            reject(error);
        })
    })
}
export function del(url,params){
    return new Promise((resolve,reject)=>{
        request.delete(url,{params:params})
        .then((response)=>{
            resolve(response.data);
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