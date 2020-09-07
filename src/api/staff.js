import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/staff/login',
    method: 'post',
    data,
  })
}

export function create(data) {
  return request({
    url: '/staff/register',
    method: 'post',
    data
  })
}

export function update(data) {
  return request({
    url: '/staff/update',
    method: 'post',
    data,
  })
}

export function remove(data) {
  return request({
    url: '/staff/delete',
    method: 'post',
   data,
  })
}

export function list(data) {
  return request({
    url: '/staff/select',
    method: 'get',
   data
  })
}

export function query(data) {
  return request({
    url: '/staff/selectOne',
    method: 'post',
    data
  })
}
