import axios from 'axios';
const status = 'prod'
export const API_URL = status === 'prod' ? 'http://103.123.8.52:8075/api/' : 'http://localhost:8000/'
export const TOKEN = "access_token"
export const BASE_URL = 'http://103.123.8.52:8075'
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
    // "Authorization": `Bearer ${localStorage.getItem(TOKEN)}`,
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

export const isLoggedIn=()=>{
  if(localStorage.getItem(TOKEN)===null){
    return false;
  }
  return true;
}

// A tiny wrapper around fetch(), borrowed from
// https://kentcdodds.com/blog/replace-axios-with-a-simple-custom-fetch-wrapper

export async function JsonClient(endpoint, { body, ...customConfig } = {}) {
  const headers = { 'Content-Type': 'application/json' }
  const config = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      "Authorization": `Bearer ${localStorage.getItem(TOKEN)}`,
      ...customConfig.headers,
    },
  }

  if (body) {
    config.body = JSON.stringify(body)
  }

  let data
  try {
    const response = await window.fetch(API_URL+endpoint, config)
    data = await response.json()
    if (response.ok) {
      return data
    }
    throw new Error(response.statusText)
  } catch (err) {
    return Promise.reject(err.message ? err.message : data)
  }
}

JsonClient.get = function (endpoint, customConfig = {}) {
  return JsonClient(endpoint, { ...customConfig, method: 'GET' })
}

JsonClient.post = function (endpoint, body, customConfig = {}) {
  return JsonClient(endpoint, { ...customConfig, body })
}