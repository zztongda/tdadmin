import axios from 'axios'
import qs from 'qs'

// create an axios instance
const service = axios.create({
  baseURL: 'http://106.3.45.23/td/', // api 的 base_url
  timeout: 10000, // request timeout,
  headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' }
})


// request interceptor
service.interceptors.request.use(
  config => {
    // Do something before request is sent
    // 在请求发出之前进行一些操作
    // config.headers['x-access-appid'] = myconfig.appid

    // if (store.getters.token) {
    //   // token
    //   config.headers['x-access-token'] = getToken()
    // }
    if (config.method === 'post') { 
      config.data = qs.stringify(config.data)
    } 
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    
  }
)

// // 添加响应拦截器
// //此处可以根据服务器的返回状态码做响应的处理
// //404 404 500
service.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  // console.log('全局响应拦截')
  // console.log(response)
  // console.groupEnd()

   if (response.data) {
        //  console.log(response.data)
      }
  return response.data;
}, function (error) {
  // 对响应错误做点什么
  console.log(error);
  return Promise.reject(error);
});

export default service
