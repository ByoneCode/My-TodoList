import request from '/@/utils/request'

export function getTaskList() {
  return request({
    url: '/getTaskList',
    method: 'get'
  })
}