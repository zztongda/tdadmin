<template>
  <div id="app">
      <Sidebar :menuList="menuList"/>
  </div>
</template>

<script>
import  Sidebar from './SideBar.vue'
export default {
  name: 'app',
  components: { Sidebar},
  data() {
    return {

    "menuList" : [
          {
            "path": "/func1",     //菜单项所对应的路由路径
            "title": "功能1",     //菜单项名称
            "children":[]        //是否有子菜单，若没有，则为[]
          },
          {
            "path": "/func2",
            "title": "功能2",
            "children":[]
          },
          {
            "path": "/func3",
            "title": "功能3",
            "children": [
              {
                "path": "/func31",
                "title": "功能3-1",
                "children":[
              {
                "path": "/func31",
                "title": "功能3-1",
                "children":[]
              },
              {
                "path": "/func32",
                "title": "功能3-2",
                "children":[]
              },
              {
                "path": "/func33",
                "title": "功能3-3",
                "children":[]
              },
            ]
              },
              {
                "path": "/func32",
                "title": "功能3-2",
                "children":[]
              },
              {
                "path": "/func33",
                "title": "功能3-3",
                "children":[]
              },
            ]
          }
    ],
    }
  }
}
</script>

<style>

</style>