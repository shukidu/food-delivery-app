import {_get, _postNoWithCredentials} from './index'

//get upload token
export const uploadToken = (data) => {
  let req = {
    data,
    url: 'service/uploadtoken'
  };
  return _get(req);
}

//upload
export const upload = (data) => {
  let formData = new FormData();
  Object.keys(data).forEach(key => {
    formData.append(key, data[key])
  })
  let req = {
    data: formData,
    url: '/upload-z2.qiniup.com/'
  }
  return _postNoWithCredentials(req);
}
