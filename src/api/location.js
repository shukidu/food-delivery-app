import {_get} from './index'

//search suggestions for current location
export const suggestion = (data) =>{
  let req = {
    data:data
  };
  req.url = 'v1/suggestion'
  return _get(req);
}

//定位当前位置
export const location = (data) =>{
  let req = {
    data
  }
  req.url = 'v1/location'
  return _get(req)
}
