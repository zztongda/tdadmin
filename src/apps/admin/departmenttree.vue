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
      <el-form ref="form" label-width="100px" v-if="id">
        <el-form-item label="部门名称">
          <el-col :span="10">
            <input type="hidden" v-model="form.DEPT_ID" />
            <el-input v-model="form.DEPT_NAME"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="上级部门">
          <el-cascader
            placeholder="请选择上级部门 可搜索"
            :options="DeptTree"
            v-model="form.DEPT_PARENT"
            :show-all-levels="false"
            :props="{emitPath:false,checkStrictly: true }"
            clearable
            filterable
          ></el-cascader>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="save">提 交</el-button>
        </el-form-item>
      </el-form>
      <div v-else>
        <el-alert type="success">
          v-org-tree官方链接
          https://github.com/lison16/v-org-tree
          <el-button type="text" @click="chuizhi">垂直显示</el-button>
        </el-alert>

        <OrgTree
          :data="DeptTree1"
          @on-node-click="orgnodeClick"
          collapsable 
          expandAll
          :horizontal="is_horizontal"
        ></OrgTree>
      </div>
    </div>
  </div>
</template>
<script>
import OrgTree from "v-org-tree";
import "v-org-tree/dist/v-org-tree.css";

export default {
  components: { OrgTree },
  data() {
    return {
      is_horizontal: false,
      filterText: "",
      DeptTree: [],
      id: "",
      form: {}
    };
  },
  computed: {
    DeptTree1() {
      return {
        id: 0,
        label: "XXX科技有限公司",
        children: this.DeptTree
      };
    }
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    }
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    chuizhi() {
      this.is_horizontal = !this.is_horizontal;
    },

    nodeClick(e) {
      this.id = e.value;
      http.get("vue.php?c=department&a=detail&DEPT_ID=" + e.value).then(res => {
        this.loading = false;
        this.form = res;
      });
    },
    orgnodeClick(e,data) {
      console.log(data);
    },

    save() {
      this.loading = true;
      http.post("vue.php?c=department&a=add", this.form).then(res => {
        if (res.code) {
          this.$message.error(res.msg);
          this.loading = false;
        } else {
          this.$message({
            message: "保存成功！",
            type: "success"
          });
          http.get("vue.php?c=department&a=tree").then(data => {
            this.DeptTree = data;
          });
        }
      });
    }
  },
  mounted() {
    http.get("vue.php?c=department&a=tree").then(data => {
      this.DeptTree = data;
    });
  }
};
</script>

<style>
/* scoped子组件里无法使用父组件样式 */
.org-tree-node-label-inner{background-color:#eee;}

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