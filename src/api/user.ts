import request from '/@/utils/request'

export function getUserInfo() {
  return request({
    url: '/profile/get_user_info',
    method: 'get'
  })
}

export function updUserInfo(data: object) {
  return request({
    url: '/profile/upd_user_info',
    method: 'post',
    data
  })
}