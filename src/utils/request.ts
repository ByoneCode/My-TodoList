import axios from 'axios'

const service = axios.create({
  baseURL: 'http://127.0.0.1:8000', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

service.interceptors.response.use(
  response => {
    const res = response.data
    if(res.code === 400){
      console.log(res.msg)
      return false
    }
    return res
  }
)

export default service