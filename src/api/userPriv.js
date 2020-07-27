import request from '@/utils/request'

export function getList(query) {
  return request({
    url: 'vue.php?c=userPriv&a=lst',
    method: 'get',
    params: query
  })
}

export function getInfo(id) {
  return request({
    url: 'vue.php?c=userPriv&a=detail',
    method: 'get',
    params: {id}
  })
}

export function save(data) {
  return request({
    url: 'vue.php?c=userPriv&a=save',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'vue.php?c=userPriv&a=del',
    method: 'get',
    params: { id }
  })
}

