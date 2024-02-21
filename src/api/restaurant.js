import {_get, _put} from './index'

//get some restaurants
export const getRestaurants = (data) => {
  let req = {
    data: data,
    url: 'v1/restaurants'
  };
  return _get(req);
}

//get the info of a restaurant
export const getRestaurant = (data) => {
  let req = {
    url: `v1/restaurant/${data.restaurant_id}`
  };
  return _get(req);
}

//get menu
export const getFoods = (data) => {
  let req = {
    url: `v1/food/${data.restaurant_id}`
  };
  return _get(req);
}

//reduce item from shopping cart
export const reduceShoppingCart = (data) => {
  let req = {
    data,
    url: 'v1/cart'
  };
  return _put(req);
}

//search restaurant by key word
export const searchRestaurant = (data) => {
  let req = {
    data,
    url: 'v1/search/restaurant'
  }
  return _get(req);
}

//get comment
export const restaurantComment = (data) => {
  let req = {
    data,
    url: 'v1/comment'
  };
  return _get(req);
}

