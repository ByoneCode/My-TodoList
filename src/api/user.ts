import request from '/@/utils/request'

export function getUserInfo() {
  return request({
    url: '/profile/get_user_info',
    method: 'get'
  })
}