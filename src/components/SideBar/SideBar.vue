<template>
  <div class="sidebar-container">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        router
        :default-active="$route.path"
        mode="vertical"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        style="min-height:100vh;width:100%;float:left"
      >
      <sidebar-item v-for="menu in menuList" :key="menu.path" :item="menu" />
    </el-menu>
  </el-scrollbar>
  </div>
</template>
<script>

import SidebarItem from './SidebarItem'

export default {
  name:'Sidebar',
  components: { SidebarItem },
  props:['menuList']
  
}
</script>

