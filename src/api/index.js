import config from '../config'
import router from '@/router'
import {removeInfo} from '@/utils/auth'

const baseURL = config.baseURL;
const axios = require('axios').create({
    baseURL: baseURL,
    timeout: 0,
    withCredentials: true,
    headers: {'X-Requested-With': 'XMLHttpRequest'},
    maxContentLength: 2000,
    transformResponse: [function(data){
        try{
            data = JSON.parse(data);
        } catch(e){
            data = {};
        }
        if(data.status === 403){
            removeInfo();
            router.push('/login');
        }
        return data;
    }]
})

//get
export const _get = (req) => {
    return axios.get(req.url, {params : req.data})
}

//post
export const _post = (req) => {
    return axios({method: 'post', url: `/${req.url}`, data: req.data})
}
  
//put
export const _put = (req) => {
    return axios({method: 'put', url: `/${req.url}`, data: req.data})
}
  
//delete
export const _delete = (req) => {
    return axios({method: 'delete', url: `/${req.url}`, data: req.data})
}
  
//post and with no Credentials
export const _postNoWithCredentials = (req) => {
    return axios({method: 'post', url: `/${req.url}`, data: req.data,withCredentials:false})
}
  

