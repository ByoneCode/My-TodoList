import axios from 'axios'

const service = axios.create({
  baseURL: '/api', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

service.interceptors.response.use(
  response => {
    const res = response.data
    return res
  }
)

export default service