<template>
  <div class="main">
    <Header />

    <div class="left">
      <el-menu
        router
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        style="width:100%"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>

          <el-menu-item index="t1">选项1</el-menu-item>
          <el-menu-item index="t2">选项2</el-menu-item>

          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="t1">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="t2">
          <i class="el-icon-setting"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="zuzhi">组织架构图</el-menu-item>
      </el-menu>
    </div>

    <TagsView />

    <div class="content">
      content
      <router-view />
    </div>
  </div>
</template>
<script>
import TagsView from "@/components/Tags.vue";
import Header from "./Header.vue";
export default {
  mounted() {
    var addrouters = [
      {
        path: "/demo",
        component: () => import("@/apps/demo/index.vue"),

        children: [
          {
            path: "/t1",
            component: () => import("@/apps/demo/t1.vue"),
            meta: { title: "测试1" }
          },
          {
            path: "/t2",
            component: () => import("@/apps/demo/t2.vue"),
            meta: { title: "测试2" }
          },
          {
            path: "/zuzhi",
            component: () => import("@/apps/demo/org-tree/index.vue"),
            meta: { title: "测试2" }
          }
        ]
      }
    ];
    this.$router.addRoutes(addrouters);
  },
  components: { TagsView, Header }
};
</script>
<style>
html,
body,
#app {
  height: 100%;
  padding: 0px;
  margin: 0px;
}

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
  padding-bottom: 30px;
  background: #f0f0f0;
  overflow: auto;
}

/*滚动条样式*/
.left::-webkit-scrollbar {
  width: 0px;
  /*height: 4px;*/
}
</style>