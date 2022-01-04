import request from '/@/utils/request'

export function register(data: object) {
  return request({
    url: '/login/reg',
    method: 'post',
    data
  })
}

export function login(data: object) {
  return request({
    url: '/login/index',
    method: 'post',
    data
  })
}