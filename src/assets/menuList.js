const menuData =[
          {
            "path": "/menhu",     //菜单项所对应的路由路径
            "title": "门户首页",     //菜单项名称
            "component":() => import('@/views/menhu.vue'),
          },
          {
            "path": "/func2",
            "title": "功能2",
          
          },
          {
            "title": "经典案例",
            "children": [
              {
                "path": "/form",
                "title": "表单页",
                "component":() => import('@/views/form.vue'),
              },
              {
                "path": "/table",
                "title": "列表页",
				"component":() => import('@/views/table.vue'),
                
              },
              {
                "path": "/axios",
                "title": "远程请求",
				"component":() => import('@/views/axios.vue'),
              },
            ]
          },{
            "title": "组件示例",
            "children": [
              {
                "path": "/12",
                "title": "圆形数字",
                "component":() => import('@/views/form.vue'),
              },
              {
                "path": "/zjtable",
                "title": "表格",
        "component":() => import('@/views/zujian/table.vue'),
                
              },
              {
                "path": "/axios",
                "title": "远程请求",
        "component":() => import('@/views/axios.vue'),
              },
            ]
          }
    ]

export default menuData