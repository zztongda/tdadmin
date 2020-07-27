import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/admin',
    title: '首页',
    component: () => import('@/apps/admin/index.vue'),
    meta: { title: "pc系统首页" },
    "children": [
      {
        "path": "/department",
        "component": () => import('@/apps/admin/department.vue'),
        meta: { title: "部门管理" }

      }, {
        "path": "/departmenttree",
        "component": () => import('@/apps/admin/departmenttree.vue'),
        meta: { title: "部门管理tree" }

      },
      {
        path: '/menu',
        component: () => import('@/apps/admin/menu'),
        meta: { title: "菜单管理" }
      },
      {
        path: '/article',
        component: () => import('@/apps/admin/article'),
        meta: { title: "文章管理" }
      },]
  },

  //-----------demo 左侧菜单加tages 一个新的后台框架-----------
  {
    path: '/demo',
    component: () => import('@/apps/demo/index.vue'),
    meta: { title: "测试首页" },
  },
  {
    path: '/index1',
    alias: '/home',
    title: '首页',
    component: () => import(/* webpackChunkName: "about" */ '@/views/layout.vue'),
  },
  {
    path: '/',
    redirect: '/index',
    component: () => import('@/views/general.vue'),
    "children": [
      {
        "path": "/index",
        "title": "系统首页",
        "component": () => import('@/views/index.vue'),
        meta: { title: "系统首页" }

      },]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/test',
    component: () => import('@/views/test.vue'),
    hidden: true
  }, {
    path: '/app',
    component: () => import('@/views/app/home.vue'),
    hidden: true
  },
 
]


const router = new VueRouter({
  mode: 'hash',//hash history
  base: process.env.BASE_URL,
  routes
})


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
