import {_get, _post, _put} from './index'

//login
export const sendLogin = (data) => {
  let req = {
    data
  };
  req.url = 'admin/login'
  return _post(req);
}

//get the info of a restuarant
export const getRestaurant = (data) => {
  let req = {
    data
  };
  req.url = 'v1/restaurant'
  return _get(req);
}

//get some restaurants
export const getRestaurants = (data) => {
  let req = {
    data
  };
  req.url = 'v1/restaurants'
  return _get(req);
}

//add delivery address
export const addAddress = (data) => {
  let req = {
    data
  };
  req.url = 'admin/address'
  return _post(req);
};

//get delivery address
export const getAddress = (data) => {
  let req = {data};
  req.url = 'admin/address'
  return _get(req);
};

//add to shopping cart
export const addShoppingCart = (data) => {
  let req = {
    data
  };
  req.url = 'v1/cart'
  return _post(req);
}

//reduce item from shopping cart
export const reduceShoppingCart = (data) => {
  let req = {
    data
  };
  req.url = 'v1/cart'
  return _put(req);
}

//get order 
export const getOrder = (data) => {
  let req = {
    data
  };
  req.url = 'v1/order'
  return _get(req);
}
