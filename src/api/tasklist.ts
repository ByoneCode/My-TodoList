import request from '/@/utils/request'

export function getTaskList(gid: any) {
  return request({
    url: '/task/get_task_list',
    method: 'get',
    params: {
      gid: gid
    }
  })
}

export function updTaskList(data: object) {
  return request({
    url: '/task/upd_task_list',
    method: 'post',
    data
  })
}

export function delTaskList(id: number) {
  return request({
    url: '/task/del_task_list',
    method: 'post',
    data: {
      id: id
    }
  })
}

export function addTaskList(data: object) {
  return request({
    url: '/task/add_task_list',
    method: 'post',
    data
  })
}

export function getTaskStar() {
  return request({
    url: '/task/get_task_star',
    method: 'get'
  })
}