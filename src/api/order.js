import {_get, _post} from './index'

//submit order
export const submitOrder = (data) => {
    let req = {
        data,
        url: 'v1/order'
    };
    return _post(req);
}

//initialize pay
export const initPay = (data) => {
    let req = {
      data,
      url: 'v1/pay'
    }
    return _post(req);
}

//get order info
export const orderInfo = (data) => {
    let req = {
      url: `v1/order/${data.order_id}`
    }
    return _get(req);
}

//get my orders
export const orders = (data) => {
    let req = {
      data,
      url: 'v1/orders'
    }
    return _get(req);
}
  
//comment under orders
export const makeComment = (data) => {
    let req = {
      data,
      url: 'v1/comment'
    }
    return _post(req)
}
  
  
//request to pay
export const requestPay = (data) => {
    let req = {
      data,
      url: '/https://pay.ispay.cn/core/api/request/pay/'
    }
    return _post(req)
}
  
//listen to status of scan pay
export const listenStatus = (data) => {
    let req = {
      data,
      url: 'v1/listen_status'
    }
    return _get(req)
}
  
  