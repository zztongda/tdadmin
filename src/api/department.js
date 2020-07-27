import request from '@/utils/request'
export function getTree(query) {
  return request({
    url: 'vue.php?c=department&a=tree',
    method: 'post',
    data: query
  })
}


export function getList(query) {
  return request({
    url: '/admin/admin/index',
    method: 'post',
    data: query
  })
}

export function getInfo(id) {
  return request({
    url: '/admin/admin/getinfo',
    method: 'get',
    params: { id }
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

