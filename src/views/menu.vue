<template>
  <div id="app">
    <Sidebar :menuList="menuList"/>
    <router-view/>
  </div>

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
  	this.bl(this.menuList);

  	this.addrouters=[{
            "path": "/menu11",     //菜单项所对应的路由路径
            "component": () => import('@/views/menu.vue'),
            "children": this.router_arr
            //this.router_arr
          }];

          console.log(this.addrouters);

  	this.$router.addRoutes(this.addrouters);
  }
}
</script>

<style>

</style>