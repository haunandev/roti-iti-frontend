import Vue from 'vue'
import axios from 'axios'
import { apiUrl } from '../constants/config'
import { getCurrentUser } from './'

const base_url = apiUrl

const api = ({...params}) => {
  const token = getCurrentUser() ? getCurrentUser().token : null
  const method = params.method
  const url    = params.url
  const data   = params.data != null ? params.data : ''
  const config = { headers: {} }

  if (params.config == 'form-data') config.headers["Content-Type"] = "multipart/form-data"

  if (params.config == 'form-data-edit') config.headers["Content-Type"] = "application/x-www-form-urlencoded"
    
  if (token) config.headers.Authorization = `Bearer ${token}`
  else delete config.headers.Authorization

  // alert(config.headers.Authorization)
  
  if (method === 'get') {
    return axios.get(base_url + url, config)
  }

  if (method === 'post') {
    return axios.post(base_url+url, data, config)
  }

  if (method === 'put') {
    return axios.put(base_url+url, data, config)
  }

  if (method === 'delete') {
    return axios.delete(base_url+url, config)
  }
}

Vue.prototype.$api = api

export default api