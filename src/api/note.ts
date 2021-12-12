import request from '/@/utils/request'

export function getNoteList() {
  return request({
    url: '/note/get_note_list',
    method: 'get'
  })
}

export function addNoteList(data: object) {
  return request({
    url: '/note/add_note_list',
    method: 'post',
    data
  })
}