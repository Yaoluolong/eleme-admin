import request from '@/utils/request'

export function list() {
  return request({
    url: 'commdity/findAll.action',
    method: 'get',
  })
}

export function single(data) {
  return request({
    url: '/commdity/findOne',
    method: 'get',
    data:{ data}

  })
}

export function create(data) {
  return request({
    url: '/commdity/add.action',
    method: 'post',
    data:{ data}
  })
}

export function update(data) {
  return request({
    url: '/commdity/edit.action',
    method: 'post',
    data:{ data}
  })
}

export function remove(id) {
  return request({
    url: '/commdity/delete.action',
    method: 'post',
    data:{
      id
    }
  })
}
