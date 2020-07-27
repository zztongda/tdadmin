<template>
    <iframe :src="$route.meta.url" frameborder="0"></iframe>
</template>

<script>
export default {
  name: "home",
//  props: ["url"],
  data: function() {
    return {
      //url:'https://www.cnblogs.com/boreguo/p/10270806.html',
    };
  },mounted(){

    console.log(this.$route);
  }
};
</script>

<style lang="less"  scoped >

/* .el-main{padding: 0px !important; overflow: hidden;} */
iframe {
  height: 100%;
  width:100%;
}

</style>
