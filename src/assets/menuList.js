const menuData =[
          {
            "path": "/menhu",     //菜单项所对应的路由路径
            "title": "门户首页",     //菜单项名称
            "component":() => import('@/views/menhu.vue'),
          },
          {
            "path": "/index1",
            "title": "门户首页1",
            "component":() => import('@/views/index1.vue'),
          
          },
          {
            "title": "前端样式",
            "children": [
              {
                "path": "/jiuban",
                "title": "旧版前端页面",
                "component":() => import('@/views/jiuban.vue'),
              },
            ]
          },{
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
                "path": "/highcharts",
                "title": "折线图表",
        "component":() => import('@/views/highcharts.vue'),
              },
              {
                "path": "/tinymce",
                "title": "富文本编辑器",
        "component":() => import('@/views/tinymce.vue'),
              },
              {
                "path": "/notice",
                "title": "消息 警告 提示",
                "component":() => import('@/views/notice.vue'),
              },
              {
                "path": "/zjtable",
                "title": "表格",
        "component":() => import('@/views/zujian/table.vue'),
                
              },
              {
                "path": "/zjselect",
                "title": "弹出选择",
        "component":() => import('@/views/zujian/select.vue'),
                
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