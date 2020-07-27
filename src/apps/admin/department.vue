<template>
  <div style="margin:20px; padding:20px; background-color:#fff">
 
    <div class="inline-block-btn-list" style="margin-bottom: 15px;">
      <button
        type="button"
        class="el-button first-element-btn el-button--primary el-button--medium is-plain"
        @click="opadd"
      >新增部门</button>

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
      <el-table-column prop="DEPT_ID" label="ID" width="60" sortable="custom"></el-table-column>

      <el-table-column prop="DEPT_NAME" label="部门名称" width="180" sortable="custom"></el-table-column>
      <el-table-column prop="name" label="管理者" width="180"></el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <el-button type="text" @click="do_edit(scope.row.DEPT_ID)">编辑</el-button>
          <el-button type="text" @click="do_delete(scope.row.DEPT_ID)">删除</el-button>
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

    <el-dialog title="新建编辑页" :visible.sync="dialogFormVisible">
      <el-form ref="form" label-width="100px">
        <el-form-item label="部门名称">
          <input type="hidden" v-model="form.DEPT_ID" />
          <el-input v-model="form.DEPT_NAME"></el-input>
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
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" :loading="loading" @click="save">提 交</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      DeptTree: [],
      form: {},
      list: [],
      set: {
        limit:5
      },
      dialogFormVisible: false,
      loading: false
    };
  },

  mounted() {
    http.get("vue.php?c=department&a=tree").then(data => {
      this.DeptTree = data;
    });

    this.getlist();
  },
  methods: {
    do_search() {
      this.set.page = 1;
      this.getlist();
    },
    getlist() {
      var url = "vue.php?c=department&a=lst";
      http.get(url,{params:this.set}).then(res => {
        this.list = res.data;
        this.set.totalCount = parseInt(res.count);
      });
    },
    //编辑事件
    do_edit(id) {
      http.get("vue.php?c=department&a=detail&DEPT_ID=" + id).then(res => {
        this.loading = false;
        this.dialogFormVisible = true;
        this.form = res;
      });
    },
    //删除事件
    do_delete(id) {
      this.$confirm("确定删除?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        http.get("vue.php?c=department&a=del&DEPT_ID=" + id).then(res => {
          this.getlist();
          this.$message({
            message: "删除成功！",
            type: "success"
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
      this.set.sort_order = column.order.replace("ending","");
      this.do_search();
    },
    opadd() {
      this.form = {};
      this.loading = false;
      this.dialogFormVisible = true;
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

          this.getlist();
          this.dialogFormVisible = false;
        }
      });
    }
  }
};
</script>