import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import request from '@/plugins/request'

import $ from '@/assets/jquery-3.5.1.js'

import hljs from 'highlight.js'
// import 'highlight.js/styles/atom-one-light.css' //样式文件
import 'highlight.js/styles/default.css' //样式文件
Vue.directive('highlight', function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
});

//import axiox from 'axios'

//使用jquery的ajax请求
// var http = {
//   base_url:"http://106.3.45.23/td/",
//   res:[],

//   post(url, data) {
//      $.postJSON(this.base_url+url, data);
//   },
//   get(url) {
//      $.getJSON(this.base_url+url).done(function(res){
//        _this.res=JSON.parse(res);
//      });
//      return this.res;
//   }
// }

// window.http = http;
window.$ = $
window.http = request
window.Vue = Vue
// Vue.prototype.http = request
//引用全局覆盖样式
import '@/assets/css/my.css';
//import '@/styles/index.scss' // global css
//import 'normalize.css/normalize.css' // a modern alternative to CSS resets


// import JsonViewer from 'vue-json-viewer'
// Vue.use(JsonViewer)
//Vue.prototype.axiox = axiox


//import  http from '@/plugins/cc'

//后台请求添加路由
http.get("vue.php?c=menu&a=routers").then((data) => {
  data.map(function (item) {
    item.component = () => import('@/apps' + item.url + '.vue')
    item.path = item.url
  });
  var addrouters = [{
    "path": "/admin",
    "component": () => import('@/apps/admin/index.vue'),
    "children": data
  }, { path: '*', component: () => import('@/views/404.vue') }];

  router.addRoutes(addrouters);
});




Vue.use(ElementUI);


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')




// import menuList from '@/assets/menuList.js'
// var routerformat = {
//   router_arr: [],
//   init() {
//     this.format(menuList);
//     var addrouters = [{
//       "path": "/general",     //菜单项所对应的路由路径
//       "component": () => import('@/views/general.vue'),
//       "children": this.router_arr
//     }];
//     // console.log(addrouters);
//     router.addRoutes(addrouters);
//   },
//   format(a) {
//     for (var o in a) {
//       if (a[o].url) {
//         if (!a[o].meta) { a[o].meta = {}; }
//         if (a[o].title) { a[o].meta.title = a[o].title; }
//         // if(a[o].url){a[o].meta.title=a[o].url;}
//         var lj = '@/views/' + a[o].component;
//         this.router_arr.push(a[o]);
//       }
//       if (a[o].children) {
//         this.format(a[o].children);
//       }
//     }
//   }
// };
// routerformat.init();
