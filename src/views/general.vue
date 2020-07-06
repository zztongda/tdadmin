<template>
<el-container>
  <el-container 
   style="min-height:100vh;"
   >
    <el-aside width="200px">
      <Sidebar :menuList="menuList"/>
    </el-aside>
    <el-main style="max-height:100vh;">
      <router-view/>
    </el-main>
  </el-container>
</el-container>
</template>
<script>

import  Sidebar from '@/components/SideBar/SideBar.vue'
import  menuList from '@/assets/menuList.js'
export default {
  name: 'app',
  components: {Sidebar},
  data() {
    return {
      addrouters:[],
      router_arr:[],
      menuList,
    }
  },
  methods:{
	
  	bl(a){
		for(var o in a){
			if(a[o].path&&a[o].component){
				var lj='@/views/'+a[o].component;
				this.router_arr.push({
					path:a[o].path,
					component:a[o].component
				});
			}
			
			if(a[o].children){
				this.bl(a[o].children);
			}
		}
  	}
  },
  mounted(){
  	
  }
}
</script>

<style type="text/css">
	
	html,body,#app{height: 100%; padding: 0px; margin: 0px;}
</style>



