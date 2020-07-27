<template>
  <el-container style="min-height:100vh;">
  <el-header>Header</el-header>
  <el-container>
    <el-aside style="overflow:auto; width:200px;">
      <Sidebar :menuList="menuList" />
    </el-aside>
    <el-main >
       <v-tags></v-tags>
       
      <router-view style=" overflow:auto;" />
   
    </el-main>
    </el-container>
  </el-container>
</template>
<script>
import Sidebar from "@/components/SideBar/SideBar.vue";
import vTags from '@/components/Tags.vue';
import menuList from "@/assets/menuList.js";
export default {
  name: "app",
  components: { Sidebar,vTags},
  data() {
    return {
      addrouters: [],
      router_arr: [],
      menuList
    };
  },
  methods: {
    bl(a) {
      for (var o in a) {
        if (a[o].path && a[o].component) {
          var lj = "@/views/" + a[o].component;
          this.router_arr.push({
            path: a[o].path,
            component: a[o].component
          });
        }

        if (a[o].children) {
          this.bl(a[o].children);
        }
      }
    }
  },
  mounted() {}
};
</script>

<style type="text/css">
html,
body,
#app {
  height: 100%;
  padding: 0px;
  margin: 0px;
}

/*滚动条样式*/
.el-aside::-webkit-scrollbar {
  width: 0px;
  /*height: 4px;*/
}
</style>



