<template>
  <div style="margin:20px; padding:20px; background-color:#fff">
    <el-alert type="success">
      <br />角色管理:点击左侧角色进入角色列表。
    </el-alert>
    <br />
    <div class="inline-block-btn-list" style="margin-bottom: 15px;">
      <button
        type="button"
        class="el-button first-element-btn el-button--primary el-button--medium is-plain"
        @click="opadd"
      >新增角色</button>
      <input v-model="set.dept_id" type="hidden" />
      <el-input
        placeholder="输入关键字搜索"
        style="margin-left:20px;width:260px;"
        @keyup.enter.native="do_search"
        v-model="set.keyword"
      >
        <el-button slot="append" icon="el-icon-search" @click="do_search"></el-button>
      </el-input>
    </div>

    <el-table :data="list" style="width: 100%" @sort-change="sortChange">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="PRIV_NO" label="排序号" width="180" sortable="custom"></el-table-column>
      <el-table-column prop="PRIV_NAME" label="角色名称" width="180" sortable="custom"></el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <el-button type="text" @click="do_edit(scope.row.USER_PRIV)">编辑</el-button>
          <el-button type="text" @click="do_delete(scope.row.USER_PRIV)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      style="margin:20px;"
      background
      layout="prev, pager, next, sizes, total, jumper"
      :current-page="set.page"
      :page-size="set.limit"
      :pager-count="5"
      :total="set.totalCount"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
    ></el-pagination>

    <!-- 新建编辑表单页 -->
    <el-drawer :title="formData.USER_PRIV?'编辑角色信息':'新建角色'" :visible.sync="dialogFormVisible">
      <el-form ref="form" label-width="100px">
        <el-form-item label="排序号">
          <input type="hidden" v-model="formData.USER_PRIV" />
          <el-input v-model="formData.PRIV_NO"></el-input>
        </el-form-item>
        <el-form-item label="角色名称">
          <el-input v-model="formData.PRIV_NAME"></el-input>
        </el-form-item>

        <el-form-item label="权限列表">
          {{formData.tree}}
          <el-tree
            :show-checkbox="true"
            class="filter-tree"
            :data="menuTree"
            node-key="value"
            @check-change="treeChange"
            v-model="formData.tree"
            :default-checked-keys="formData.tree"
            ref="tree"
            :props="{
          children: 'children',
          label: 'label'
        }"
            default-expand-all
          ></el-tree>
        </el-form-item>
      </el-form>

      <div style="text-align:center">
        <el-button @click="huoqu">获取</el-button>
        <el-button type="primary" @click="save" :loading="loading">{{ loading ? '提交中 ...' : '确 定' }}</el-button>
        <el-button @click="dialogFormVisible = false">取 消</el-button>
      </div>
    </el-drawer>
  </div>
</template>
<script>
import { getList, getInfo, save, del } from "@/api/userPriv";
import { getTree as getMenuTree } from "@/api/menu";
export default {
  data() {
    return {
      menuTree: [],
      formData: {},
      list: [],
      set: {},
      dialogFormVisible: false,
      loading: false,
    };
  },
  mounted() {
    this.getlist();
  },
  methods: {
    treeChange(q,w,e){
console.log(q);
    },
    huoqu(){
  console.log(this.$refs.tree.getCheckedKeys());

    },
    do_search() {
      this.set.page = 1;
      this.getlist();
    },
    getlist() {
      getList(this.set).then((res) => {
        this.list = res.data;
        this.set.totalCount = parseInt(res.count);
      });
    },
    //编辑事件
    do_edit(id) {
      this.getMenuTree();
      getInfo(id).then((res) => {
        this.loading = false;
        this.dialogFormVisible = true;
        this.formData = res;
        
        this.formData.tree=[1,8,2];
      
      });
    },
    //新增事件
    opadd() {
      this.getMenuTree();
      this.formData = {};
      this.loading = false;
      this.dialogFormVisible = true;
    },
    getMenuTree() {
      getMenuTree().then(
        function (res) {
          this.menuTree = res;
        }.bind(this)
      );
    },
    //删除事件
    do_delete(id) {
      this.$confirm("确定删除?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        del(id).then((res) => {
          this.getlist();
          this.$message({
            message: "删除成功！",
            type: "success",
          });
        });
      });
    },
    //切换页码
    handleCurrentChange(cpage) {
      this.set.page = cpage;
      this.getlist();
    },
    //设置每页条数
    handleSizeChange(psize) {
      this.set.limit = psize;
      this.do_search();
    },
    //点击排序
    sortChange(column) {
      this.set.sort_field = column.prop;
      this.set.sort_order = column.order.replace("ending", "");
      this.do_search();
    },

    save() {
      this.loading = true;
      save(this.formData).then((res) => {
        if (res.code) {
          this.$message.error(res.msg);
          this.loading = false;
        } else {
          this.$message({
            message: "保存成功！",
            type: "success",
          });
          this.getlist();
          this.dialogFormVisible = false;
        }
      });
    },
  },
};
</script>
<style>
:focus {
  outline: 0;
}
.el-drawer {
  overflow: auto;
}
</style>