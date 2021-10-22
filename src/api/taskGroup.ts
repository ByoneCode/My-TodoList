import request from '/@/utils/request'

export function getTaskGroup(gid: any) {
  return request({
    url: '/task/get_task_group',
    method: 'get',
    params: {
      gid: gid
    }
  })
}

export function updTaskGroup(data: object) {
  return request({
    url: '/task/upd_task_group',
    method: 'post',
    data
  })
}

export function addTaskGroup(data: object) {
  return request({
    url: '/task/add_task_group',
    method: 'post',
    data
  })
}

export function delTaskGroup(id: any) {
  return request({
    url: '/task/del_task_group',
    method: 'post',
    data: {
      id: id
    }
  })
}

export function getGroupInfo(id: any) {
  return request({
    url: '/task/get_group_info',
    method: 'get',
    params: {
      id: id
    }
  })
}