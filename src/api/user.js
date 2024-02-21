import {_get, _post, _delete} from './index'

//get all the addresses of a user
export const getAllAddress = (data) => {
  let req = {
    data,
    url: 'admin/all_address'
  };
  return _get(req);
}

//get the delivery address
export const getAddress = (data) => {
  let req = {
    data,
    url: 'admin/address'
  }
  return _get(req)
}

//add delivery address
export const add_address = (data) => {
  let req = {
    data,
    url: 'admin/address'
  }
  return _post(req);
}

//update address
export const updateAddress = (data) =>{
  let req = {
    data,
    url: 'admin/update_address'
  }
  return _post(req)
}

//delete delivery address
export const deleteAddress = (data) => {
  let req = {
    data,
    url: 'admin/address'
  }
  return _delete(req)
}

//user login
export const login = (data) => {
  let req = {
    data,
    url: 'admin/user_login'
  }
  return _post(req);
}

//get user info
export const userInfo = (data) => {
  let req = {
    data,
    url: 'admin/user_info'
  }
  return _get(req);
}

//change user avatar
export const changeAvatar = (data) => {
  let req = {
    data,
    url: 'admin/change_avatar'
  }
  return _post(req)
}

//get my comments
export const comment = (data) => {
  let req = {
    data,
    url: 'v1/my_comment'
  }
  return _get(req);
}

//delete comments
export const deleteComment = (data) => {
  let req = {
    data,
    url: 'v1/comment'
  }
  return _delete(req);
}

