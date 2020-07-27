import request from '@/utils/request'
export function getTree(query) {
  return request({
    url: 'vue.php?c=menu&a=tree',
    method: 'post',
    data: query
  })
}