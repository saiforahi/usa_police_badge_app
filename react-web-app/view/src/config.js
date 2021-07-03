import axios from 'axios';

const status = 'prod'
export const API_URL = status === 'prod' ? 'http://103.123.8.52:8075/api/' : 'http://localhost:8000/'
export const TOKEN = "access_token"

export const credentials = {
  "GOOGLE_CLIENT_ID": "705019730299-kfb5arnuisah2135tka05uka6h7v901a.apps.googleusercontent.com",
  "FACEBOOK_APP_ID": "788095958681659"
}
export const API = axios.create({
  baseURL: API_URL,
  timeout: 100000,
  headers: {
    "Authorization": `Bearer ${localStorage.getItem(TOKEN)}`,
    "Content-Type": "application/json",
   // "Access-Control-Allow-Origin": "*"
  }
})
export const FILE_API = axios.create({
  baseURL: API_URL,
  timeout: 100000,
  headers: {
    "Authorization": `Bearer ${localStorage.getItem(TOKEN)}`,
    "Content-Type": "multipart/form-data",
   // "Access-Control-Allow-Origin": "*"
  }
})
API.interceptors.request.use(
  function(config) {
    const token = localStorage.getItem(TOKEN); 
    if (token) {
      config.headers["Authorization"] = 'Bearer ' + token;
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);
export const PUBLIC_API = axios.create({
  baseURL: API_URL,
  timeout: 100000,
  headers:{
    "Content-Type": "application/json"
  }
})

export const FAKER_API = axios.create({
  timeout: 10000
})

export const DOWNLOADER = axios.create({
  timeout: 10000
})

export const isLoggedIn=()=>{
  if(localStorage.getItem(TOKEN)===null){
    return false;
  }
  return true;
}

// export function can(permission){
//   let result=false;
//   if(localStorage.getItem('permissions')!==undefined){
//     Array.from(JSON.parse(localStorage.getItem('permissions'))).forEach(role=>{
//       if(role.name===permission){
//         result=true;
//       }
//     })
//   }
  
//   return result;
// }
// export function hasRole(role_name){
//   let result=false;
//   if(localStorage.getItem('roles')!==undefined){
//     Array.from(JSON.parse(localStorage.getItem('roles'))).forEach(role=>{
//       if(role===role_name){
//         result=true;
//       }
//     })
//   }
//   return result;
// }

