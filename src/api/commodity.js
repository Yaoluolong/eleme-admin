import request from '@/utils/request'

export function list(data) {
  return request({
    url: 'commodity/findAll.action',
    method: 'post',
      data
  })
}

export function single(data) {
  return request({
    url: '/commodity/findOne',
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

export function remove(data) {
  return request({
    url: '/commodity/delete.action',
    method: 'post',
     data
  })
}
