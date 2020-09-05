import request from '@/utils/request'

export function create() {
  return request({
    url: '/staff/create',
    method: 'post',
  })
}

export function update(data) {
  return request({
    url: '/staff/update',
    method: 'post',
    data,
  })
}

export function remove(id) {
  return request({
    url: '/staff/remove',
    method: 'post',
   id,
  })
}

export function list() {
  return request({
    url: '/staff/list',
    method: 'get'
  })
}

export function query(id) {
  return request({
    url: '/staff/query',
    method: 'post',
    data: {
      id
    }
  })
}
