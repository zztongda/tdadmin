<template>
  <div class="main">
    <Header />
    <Sidebar />

    <TagsView />

    <div class="content">
      <router-view />
    </div>
  </div>
</template>
<script>
import TagsView from "./Tags.vue";
import Header from "./Header.vue";
import Sidebar from "./Sidebar.vue";
export default {
  mounted() {
    // var addrouters = [
    //   {
    //     path: "/demo",
    //     component: () => import("@/apps/demo/index.vue"),

    //     children: [
    //       {
    //         path: "/t1",
    //         component: () => import("@/apps/demo/t1.vue"),
    //         meta: { title: "测试1" }
    //       },
    //       {
    //         path: "/t2",
    //         component: () => import("@/apps/demo/t2.vue"),
    //         meta: { title: "测试2" }
    //       }
    //     ]
    //   }
    // ];
    // this.$router.addRoutes(addrouters);
  },
  components: { TagsView, Header, Sidebar }
};
</script>
<style >
html,
body,
#app {
  height: 100%;
  padding: 0px;
  margin: 0px;
}
</style>
<style scoped>
.left ul {
  height: 100%;
}

.left {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  width: 250px;
  bottom: 0;
  background-color: darkkhaki;
  overflow-y: scroll;
  overflow-x: hidden;
}

.content {
  position: absolute;
  left: 250px;
  right: 0;
  top: 100px;
  bottom: 0;
  border-top: solid 1px #ccc;
  padding-bottom: 0px;
  background: #f0f0f0;
  overflow: auto;
}

/*滚动条样式*/
.left::-webkit-scrollbar {
  width: 0px;
  /*height: 4px;*/
}
</style>