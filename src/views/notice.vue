<template>
	<div>
  <el-button  @click="open">打开消息提示</el-button>

  </div>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$message('这是一条<hr>消息提示');
      },
    }
  }
</script>