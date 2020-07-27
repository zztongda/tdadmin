<template>
  <div class="main">
    <div class="left">
      <el-input placeholder="输入关键字进行过滤" v-model="filterText" style="margin-bottom:10px"></el-input>
      <el-tree
        class="filter-tree"
        @node-click="nodeClick"
        :data="DeptTree"
        :props="{
          children: 'children',
          label: 'label'
        }"
        default-expand-all
        :filter-node-method="filterNode"
        ref="tree"
      ></el-tree>
    </div>
    <div class="right">
      <userList :cdept="cdept" />
    </div>
  </div>
</template>
<script>
import { getTree } from "@/api/department";
import userList from "./user_list";
export default {
  components:{userList},
  data() {
    return {
      filterText: "",
      DeptTree: [],
      cdept: {},
    };
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    },
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    nodeClick(e) {
      this.cdept=e;
    },
  },
  mounted() {
    getTree().then((data) => {
      this.DeptTree = data;
    });
  },
};
</script>

<style>
/* scoped子组件里无法使用父组件样式 */
.org-tree-node-label-inner {
  background-color: #eee;
}
</style>


<style scoped>
.main {
  position: relative;
  bottom: 0;
  height: 100%;
  width: 100%;
  padding: 0px;
  background-color: #fff;
}

.left {
  display: block;
  position: absolute;
  padding: 10px;
  margin: 0px;
  left: 10px;
  top: 0px;
  width: 200px;
  bottom: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  border-right: 1px solid #ccc;
  z-index: 100;
}
.right {
  display: block;
  position: absolute;
  padding: 10px;
  margin: 0px;
  left: 230px;
  top: 0px;
  right: 0px;
  bottom: 0;
  overflow: auto;
}
/*滚动条样式*/
.left::-webkit-scrollbar {
  width: 0px;
  /*height: 4px;*/
}
</style>