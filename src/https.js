import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 5000 // 响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
//  axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.baseURL = '' //  配置接口地址

// POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
// 在发送请求之前做某件事
  config.headers['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC93d3cuaG9yaXpvdS5jbiIsImF1ZCI6IjEyNy4wLjAuMSIsImlhdCI6MTU2ODk3MDI2NCwibmJmIjoxNTY4OTcwMjY3LCJleHAiOjk2MTU2ODk3MDI2NCwidXNlcl9pZCI6MX0.yX-ZYall9rEr8RJEjnVeGhoS_1XOKkCbCuehL3nsaTM';
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  } return config
}, (error) => {
  console.log('错误的传参')
  return Promise.reject(error)
})
// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) => {
// 对响应数据做些事
  if (!res.data.success) {
    return Promise.resolve(res)
  } return res
}, (error) => {
  console.log('网络异常')
  return Promise.reject(error)
})

// 返回一个Promise(发送post请求)
export function fetchPost (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
    return axios.post
  })
}
// 返回一个Promise(发送get请求)
export function fetchGet (url, param) {
  return new Promise((resolve, reject) => {
    axios.get(url, {params: param})
      .then(response => {
        resolve(response)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
export default {
  fetchPost,
  fetchGet
}
