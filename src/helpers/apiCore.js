import {url, user} from '../config'

export const getArticules = () =>{
 return fetch(`${url}/img/imgs`, {
    method: 'GET', 
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json());
}

export const createImg = (img) =>{
  return fetch(`${url}/img/create`, {
    method: 'POST', 
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(img)
  }).then(res => res.json());
}

export const removeImage = (id, token, pass) =>{
  return fetch(`${url}/img/remove/${id}`, {
    method: 'DELETE', 
    headers:{
      'Content-Type': 'application/json',
      token: token
    },
    body: JSON.stringify({password: pass})
  }).then(res => res.json());
}

export const signgin = () => {
  const token = localStorage['jwt'];
  if(token){
    return false;
  }
  return fetch(`${url}/auth/signin`, {
    method: "POST",
    headers: {
      Accept: 'application/json',
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    })
}

export const authenticate = (data) => {
  if(typeof window !== 'undefined') {
    localStorage.setItem('jwt', JSON.stringify(data));
  }
}

export const isAuthenticated = () => {
  if(typeof window == 'undefined'){
    return false;
  }
  if(localStorage.getItem('jwt')){
    return JSON.parse(localStorage.getItem('jwt'));
  }
  return false;
}
