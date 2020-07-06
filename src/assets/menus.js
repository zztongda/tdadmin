const menuData = [{
    path: '/',
    component: () => import('@/views/general.vue'),
    icon: 'el-icon-information',
    title:'经典案例',
    children: [
            { path: '/table', 
                component: () => import('@/views/table.vue'), 
                title: '表格' },
            {
                path: '/Uploads',
                title:'上传',
                component: () => import('@/views/Uploads.vue')
              },
              {
                path: '/axios',
                title:'axios',
                component: () => import('@/views/axios.vue')
              },{
              path: '/about',
              title:'关于我们',
             component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
            },
            {
              path: '/form',
              title:'表单',
               component: () => import(/* webpackChunkName: "about" */ '@/views/form.vue')
            },
            {
              path: '/kjfuwenben',
              title:'富文本编辑器',
               component: () => import(/* webpackChunkName: "about" */ '@/views/kjfuwenben.vue')
            },
            {
              path: '/menu',
              component: () => import('@/views/menu/index')
            },
            {
              path: '/upload',
              component: () => import('@/views/upload/index')
            },
            {
              path: '/shijian',
               component: () => import(/* webpackChunkName: "about" */ '@/views/shijian.vue')
            }  ,
            {
              path: '/lianji',
               component: () => import(/* webpackChunkName: "about" */ '@/views/lianji.vue')
            }  ,
            {
              path: '/test',
              component: () => import(/* webpackChunkName: "about" */ '@/views/test.vue'),
            },
            ]
}]

export default menuData