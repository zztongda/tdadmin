<template>
  <div style="margin:20px; padding:20px; background-color:#fff">
    <div class="inline-block-btn-list" style="margin-bottom: 15px;">
      <button
        type="button"
        class="el-button first-element-btn el-button--primary el-button--medium is-plain"
        @click="opadd"
      >新增文章</button>

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
      <el-table-column prop="id" label="ID" width="80" sortable="custom"></el-table-column>

      <el-table-column prop="title" label="标题" width="280" sortable="custom">
        <template scope="scope">
          <el-button type="text" @click="op_detail(scope.row.id)">{{scope.row.title}}</el-button>
        </template>

      </el-table-column>
      <el-table-column prop="name" label="管理者" width="180"></el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
      
          <el-button type="text" @click="do_edit(scope.row.id)">编辑</el-button>
          <el-button type="text" @click="do_delete(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      style="margin:20px;"
      background
      layout="prev, pager, next, sizes, total, jumper"
      :current-page="set.page"
      :page-size="set.limit"
      :page-sizes="set.pageSizes"
      :pager-count="5"
      :total="set.totalCount"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
    ></el-pagination>

    <!-- 新建编辑表单页 -->

    <el-dialog title="新建编辑页" :fullscreen="true" :visible.sync="dialogFormVisible">
      <div style="right:500px;position: absolute;">
        <tinymce-editor ref="editor" v-model="form.content" language="zh_CN" skin="oxide-dark"></tinymce-editor>
     

      </div>
      <div style="width:400px;right:0px;position: absolute;">
        
          <input type="hidden" v-model="form.id" />
          <el-input v-model="form.title"></el-input>
           <div slot="footer" class="dialog-footer">
        <el-button @click="base64">图片转base64</el-button>
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" :loading="loading" @click="save">提 交</el-button>
      </div>
      </div>

    </el-dialog>
 
    <detail ref="detail" />
  </div>
</template>
<script>
import TinymceEditor from "@/components/tinymce-editor/tinymce-editor";
import detail from "./article_detail.vue";
export default {
  components: { TinymceEditor, detail },
  data() {
    return {
      DeptTree: [],
      form: {},
      list: [],
      set: {
        limit: 5,
        pageSizes: [5, 10, 20]
      },
      dialogFormVisible: false,
      loading: false
    };
  },

  mounted() {
    http.get("vue.php?c=article&a=tree").then(data => {
      this.DeptTree = data;
    });

    this.getlist();
  },
  methods: {
    op_detail(id) {
      this.$refs.detail.id = id;
      this.$refs.detail.visible = true;
    },
    base64() {
      $.post("http://127.0.0.1:81/base64.php", {
        str: this.form.content
      }).done(
        function(res) {
          this.form.content = res;
        }.bind(this)
      );
    },
    do_search() {
      this.set.page = 1;
      this.getlist();
    },
    getlist() {
      var url = "vue.php?c=article&a=lst";
      http.get(url, { params: this.set }).then(res => {
        this.list = res.data;
        this.set.totalCount = parseInt(res.count);
      });
    },
    //编辑事件
    do_edit(id) {
      this.dialogFormVisible=true;

      http.get("vue.php?c=article&a=detail&id=" + id).then(res => {
        this.loading = false;
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
        http.get("vue.php?c=article&a=del&id=" + id).then(res => {
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
      this.set.sort_order = column.order.replace("ending", "");
      this.do_search();
    },
    opadd() {
      this.form = {};
      this.loading = false;
      this.dialogFormVisible = true;
    },
    save() {
      this.loading = true;
      http.post("vue.php?c=article&a=add", this.form).then(res => {
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
<style>
.tox-tinymce {
  height: 700px !important;
}
</style>