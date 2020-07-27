import axiox from 'axios'
import qs from 'qs'
const service =axiox.create({
    // baseURL:'http://106.3.45.23/td/vue.php?',//baseURL会在发送请求的时候拼接在url参数的前面
    baseURL:'http://106.3.45.23/td/',//baseURL会在发送请求的时候拼接在url参数的前面
    timeout:500000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      transformRequest: [function(data) {
        // 请求前参数序列化
        return qs.stringify(data);
      }]
})


//请求拦截
//所有的网络请求都会先走这个方法
// 添加请求拦截器,所有的网络请求都会先走这个方法，我们可以在它里面为请求添加一些自定义的内容
service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // console.log('全局请求拦截')
    // console.log(config)
    // console.groupEnd()
 //   config.headers.token='12343'
    return config;
}, function (error) {
    // 对请求错误做些什么
    console.log(error);
    return Promise.reject(error);
});

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

// export function get(url,params) {
//     return instance.get(url,{
//         params
//     })
// }
// service.post=function(url,data){
//     return service.post(url,data)
// }
// export function post(url,data) {
//     alert();
//    // return instance.post(url,data)
// }

// export  function del(url) {
//     return instance.delete(url)
// }

// export  function put(url,data) {
//     return instance.put(url,data)
// }

export default service