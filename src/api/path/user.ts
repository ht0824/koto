// import request from '../tool'

// // 用户登录
// export const loginApi = (data: any) => {
//   return request.post(`/api/oauth/admin/user/login?username=${data.username}&password=${data.password}`, { ...data, grant_type: 'password', scope: 'serve' }, '')
// }

// // 用户注册
// export const registerApi = (data: any) => {
//   return request.post('/system/add', data, '')
// }

// // 修改密码
// export const changePasswordApi = (data: any) => {
//   return request.get('/system/update/password', data, '')
// }

// // 获取token
// export const getTokenApi = (data: any) => {
//   return request.get('/api/oauth/oauth/token', data, '')
// }

import { Get } from '../server'

const getUserInfo = (data: any) => {
  return Get('/user/info', data)
}

export const userApi = {
  getUserInfo,
}
