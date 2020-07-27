<template>
  <div class="main">
    <div class="left">
      <el-input placeholder="输入关键字进行过滤" v-model="filterText" style="margin-bottom:10px"></el-input>
      <el-tree
        class="filter-tree"
        @node-click="nodeClick"
        :data="menuTree"
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
      <el-alert type="success" style="margin-bottom:20px;">
        菜单路径如果是http地址，则在iframe中打开。
        <br />规则：如存在子级则不允许删除;排序号越大越靠前
      
        <br />
        <el-button type="text" @click="do_add">新建</el-button>
      </el-alert>
      <el-form ref="form" label-width="100px">
        <el-form-item label="菜单类型">
          <el-col :span="10">
            <el-radio-group v-model="formdata.type">
              <el-radio border size="medium" label="1">目录</el-radio>
              <el-radio border size="medium" label="2">菜单</el-radio>
              <el-radio border size="medium" label="3">按钮</el-radio>
            </el-radio-group>
          </el-col>
        </el-form-item>

        <el-form-item label="菜单名称">
          <el-col :span="10">
            <input type="hidden" v-model="formdata.id" />
            <el-input v-model="formdata.title"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="路径" v-if="formdata.type!=1">
          <el-col :span="10">
            <el-input v-model="formdata.url"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="新窗口打开" v-if="formdata.type==2">
          <el-col :span="10">
            <el-switch v-model="formdata.new_window" active-value="1" inactive-value="0"></el-switch>
          </el-col>
        </el-form-item>
        <el-form-item label="是否隐藏" v-if="formdata.type!=3">
          <el-col :span="10">
            <el-switch v-model="formdata.hidden" active-value="1" inactive-value="0"></el-switch>
          </el-col>
        </el-form-item>
        <el-form-item label="上级菜单">
          <el-cascader
            placeholder="请选择上级菜单 可搜索"
            :options="menuTree"
            v-model="formdata.pid"
            :show-all-levels="false"
            :props="{emitPath:false,checkStrictly: true }"
            clearable
            filterable
          ></el-cascader>
        </el-form-item>

        <el-form-item label="菜单图标" v-if="formdata.type==1">
          <el-col :span="10">
            <e-icon-picker
              v-model="formdata.icon"
              :options="{FontAwesome: false, ElementUI: true}"
            />
          </el-col>
        </el-form-item>

        
        <el-form-item label="菜单排序">
          <el-col :span="5">
            <el-input v-model="formdata.order"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" v-if="id" @click="save">编辑保存</el-button>

          <el-button type="primary" v-else @click="save">新建保存</el-button>
          <el-button type="danger" v-if="!if_children" @click="do_delete(formdata.id)">删 除</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import iconPicker from "e-icon-picker";
import "e-icon-picker/dist/index.css"; //基础样式
import "e-icon-picker/dist/main.css"; //fontAwesome 图标库样式

Vue.use(iconPicker);

export default {
  data() {
    return {
      is_horizontal: false,
      filterText: "",
      menuTree: [],
      id: "",
      if_children: true,
      formdata: { type: "1" },
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
    do_add() {
      this.loading = false;
      this.formdata = { type: "1" };
      this.id = "";
      this.if_children = true;
    },
    //删除事件
    do_delete(id) {
      this.$confirm("确定删除?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        http.get("vue.php?c=menu&a=del&id=" + id).then((res) => {
          this.getlist();
          this.$message({
            message: "删除成功！",
            type: "success",
          });
        });
      });
    },
    nodeClick(e) {
      this.id = e.value;
      if (e.children) {
        this.if_children = true;
      } else {
        this.if_children = false;
      }
      http.get("vue.php?c=menu&a=detail&id=" + e.value).then((res) => {
        this.loading = false;
        this.formdata = res;
      });
    },
    save() {
      this.loading = true;
      http.post("vue.php?c=menu&a=add", this.formdata).then((res) => {
        if (res.code) {
          this.$message.error(res.msg);
          this.loading = false;
        } else {
          this.$message({
            message: "保存成功！",
            type: "success",
          });
          http.get("vue.php?c=menu&a=tree").then((data) => {
            this.menuTree = data;
          });
        }
      });
    },
    getlist() {
      http.get("vue.php?c=menu&a=tree").then((data) => {
        this.menuTree = data;
      });
    },
  },
  mounted() {
    this.getlist();
  },
};
</script>
<style>
.el-tree-node {
  position: relative;
  padding-left: 16px;
}
.el-tree-node__children {
  padding-left: 16px;
}
.el-tree-node :last-child:before {
  height: 38px;
}
.el-tree > .el-tree-node:before {
  border-left: none;
}
.el-tree > .el-tree-node:after {
  border-top: none;
}
.el-tree-node:before,
.el-tree-node:after {
  content: "";
  left: -4px;
  position: absolute;
  right: auto;
  border-width: 1px;
}
.tree :first-child .el-tree-node:before {
  border-left: none;
}
.el-tree-node:before {
  border-left: 1px dashed #4386c6;
  bottom: 0px;
  height: 100%;
  top: -20px;
  width: 1px;
}
.el-tree-node:after {
  border-top: 1px dashed #4386c6;
  height: 20px;
  top: 17px;
  width: 24px;
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