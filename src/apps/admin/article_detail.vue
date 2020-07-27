<template>
  <el-dialog :title="form.title" :visible.sync="visible" 
  :fullscreen="true" 
  @open="init">
    <div v-html="form.content"  v-highlight></div>
  </el-dialog>
</template>
<script>

export default {
  data() {
    return {
      visible: false,
      id: "",
      form: {}
    };
  },
  methods: {
    init() {
      const rLoading = this.$loading();
      http.get("vue.php?c=article&a=detail&id=" + this.id).then(res => {
        this.form = res;
        rLoading.close();
      });


    }
  }
};
</script>
