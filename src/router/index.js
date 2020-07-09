import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '@/views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/index',
    alias:'/home',
    title:'首页',
    component: () => import(/* webpackChunkName: "about" */ '@/views/layout.vue'),
  },
  {
    path: '/',
    redirect:'/welcome',
    component: () => import('@/views/general.vue'),
    "children": [
      {
        path: '/welcome',
        title:'欢迎页',
        component: () => import('@/views/welcome.vue'),
      }]
  },
  {
    path: '*',
    component: () => import('@/views/404.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/menu',
    component: () => import('@/views/menu'),
    hidden: true
  },{
    path: '/test',
    component: () => import('@/views/test.vue'),
    hidden: true
  },
  // {
  //       path: '/menu22',
  //       title:'XX系统123',
  //       component: () => import('@/views/menu.vue'),
  //       children:[{
  //           "path": "/func81",     //菜单项所对应的路由路径
  //           "title": "功能1",     //菜单项名称
  //           component: () => import('@/views/lianji.vue'),
  //         }]
  //       }

]

const router = new VueRouter({
  mode: 'hash',//hash history
  base: process.env.BASE_URL,
  routes
})
import  menuList from '@/assets/menuList.js'
var routerformat={
  router_arr:[],
  init(){
    this.format(menuList);
    var addrouters=[{
            "path": "/general",     //菜单项所对应的路由路径
            "component": () => import('@/views/general.vue'),
            "children": this.router_arr
          }];
   // console.log(addrouters);
    router.addRoutes(addrouters);
  },
  format(a){
    for(var o in a){
      if(a[o].path&&a[o].component){
        var lj='@/views/'+a[o].component;
        this.router_arr.push({
          path:a[o].path,
          component:a[o].component
        });
      }
      if(a[o].children){
        this.format(a[o].children);
      }
    }
  }
};
routerformat.init();



// import menuD from '@/assets/menus' // 这里的数据模拟后台返回的数据
// router.addRoutes(menuD)
//this.$router.addRoutes(this.menuList);

// router.beforeEach((to,from,next)=>{
//   if(to.matched.length==0){//to.matched.length判断有没有这个路由，0就是没有
      
//       router.addRoutes([
//           {
//             path: to.path,
//             //name: 'About1',
//             component: () => import('@/views'+to.path+'.vue')
//           },
          
//       ]);

//       console.log(router.component)
//       //next({path:to.path})
//       router.push({path: to.path})

//   }else{    
//     next()
//   }
// })

export default router
