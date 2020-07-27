import request from '@/utils/request'

export function getList(query) {
  return request({
    url: 'vue.php?c=user&a=lst',
    method: 'get',
    params: query
  })
}

export function getInfo(id) {
  return request({
    url: 'vue.php?c=user&a=detail',
    method: 'get',
    params: { 'UID':id }
  })
}

export function modify(data) {
  return request({
    url: '/admin/admin/modify',
    method: 'post',
    data
  })
}

export function save(data) {
  return request({
    url: '/admin/admin/save',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: '/admin/admin/del',
    method: 'get',
    params: { id }
  })
}

