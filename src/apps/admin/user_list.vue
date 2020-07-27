<template>
  <div>
    <el-alert type="success">
      <b>{{cdept.label}}</b>
      <br />用户管理:点击左侧用户进入用户列表。
    </el-alert>
    <br />
    <div class="inline-block-btn-list" style="margin-bottom: 15px;">
      <button
        type="button"
        class="el-button first-element-btn el-button--primary el-button--medium is-plain"
        @click="opadd"
      >新增用户</button>
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

    <el-table :data="list" style="width: 100%" @sort-change="sortChange" height="385">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="USER_ID" label="用户名" width="180"></el-table-column>
      <el-table-column prop="USER_NAME" label="姓名" width="180" sortable="custom"></el-table-column>
      <el-table-column prop="USER_PRIV_NAME" label="角色" width="180" sortable="custom"></el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <el-button type="text" @click="do_edit(scope.row.UID)">编辑</el-button>
          <el-button type="text" @click="do_delete(scope.row.UID)">删除</el-button>
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
    <el-drawer :title="formData.USER_ID?'编辑用户信息':'新建用户'" :visible.sync="dialogFormVisible">
      <el-form ref="form" label-width="100px">
        <el-form-item label="姓名">
          <input type="hidden" v-model="formData.USER_ID" />
          <el-input v-model="formData.USER_NAME"></el-input>
        </el-form-item>
        <el-form-item label="部门">
          <el-cascader
            placeholder="请选择部门 可搜索"
            :options="deptTree"
            v-model="formData.DEPT_ID"
            :show-all-levels="false"
            :props="{emitPath:false,checkStrictly: true }"
            clearable
            filterable
          ></el-cascader>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" :loading="loading" @click="save">提 交</el-button>
      </div>
    </el-drawer>
  </div>
</template>
<script>
import { getList, getInfo } from "@/api/user";
import { getTree } from "@/api/department";
export default {
  data() {
    return {
      deptTree: [],
      formData: {},
      list: [],
      set: {
        limit: 5,
      },
      dialogFormVisible: false,
      loading: false,
    };
  },
  props: ["cdept"],
  mounted() {
    this.getlist();
  },
  watch: {
    cdept(val) {
      this.set.dept_id = val.value;
      this.getlist();
    },
  },
  methods: {
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
      getInfo(id).then((res) => {
        this.dialogFormVisible = true;
        this.getDeptTree();
        this.formData = res;
      });
    },
    //新增事件
    opadd() {
      this.getDeptTree();
      this.formData = {};
      this.formData.DEPT_ID = this.cdept.value;
      this.loading = false;
      this.dialogFormVisible = true;
    },
    //更新、获取部门列表
    getDeptTree() {
      getTree().then((res) => {
        this.deptTree = res;
      });
    },
    //删除事件
    do_delete(id) {
      this.$confirm("确定删除?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        http.get("vue.php?c=department&a=del&USER_ID=" + id).then((res) => {
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
      http.post("vue.php?c=department&a=add", this.formData).then((res) => {
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