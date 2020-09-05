import request from '@/utils/request'

export function list() {
  return request({
    url: 'commdity/findAll.action',
    method: 'get'
  })
}

export function single(data) {
  return request({
    url: '/commodity/single',
    method: 'post',
    data
  })
}

export function create(data) {
  return request({
    url: '/commodity/add.action',
    method: 'post',
    data
  })
}

export function update(data) {
  return request({
    url: '/commodity/edit.action',
    method: 'post',
    data
  })
}

export function remove(id) {
  return request({
    url: '/commodity/delete.action',
    method: 'post',
    id
  })
}
