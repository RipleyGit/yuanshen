import request from '@/utils/request'
// 设计师新增
export function desiginerAdd(params) {
  return request({
    url: '/project/product/designer',
    method: 'post',
    data:params
  })
}
// 设计师详情
export function desiginerDetail(params) {
  return request({
    url: '/project/product/designer',
    method: 'get',
    params
  })
}

// 设计师列表

export function desiginerList(params) {
  return request({
    url: '/project/product/designer/queryList',
    method: 'get',
    params
  })
}