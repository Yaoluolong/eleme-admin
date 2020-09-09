import request from '@/utils/request'

export function list() {
  return request({
    url: '/ident/list',
    method: 'post'
  })
}

export function canlist() {
  return request({
    url: '/ident/cancelList',
    method: 'post'
  })
}

export function update(data) {
  return request({
    url: '/ident/update',
    method: 'post',
    data
  })
}

export function updateCancel(data) {
  return request({
    url: '/ident/updateCancel',
    method: 'post',
    data
  })
}
