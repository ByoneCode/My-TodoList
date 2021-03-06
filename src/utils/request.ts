import axios from 'axios'
import { ref } from 'vue'
import Modal from '/@/components/modal/modal'

const service = axios.create({
  baseURL: 'http://127.0.0.1:8000', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['token'] = token
    }
    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    if(res.code === 401){
      alert(res.msg)
      // Modal({title: '提醒',msg: 'lalla'})
      return false
    }
    // if(res.code === 400){
    //   alert(res.msg);
    // }
    return res
  }
)

export default service