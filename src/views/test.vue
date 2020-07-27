<template>
  <div></div>
</template>
<script>
export default {
  mounted(){
    alert();
    //import index from '@/views/About.vue'
    // const index = resolve => require(['../pages/index.vue'], resolve)
    var a = require('@/views/About.vue');
    console.log(a);
  },
 // components:{a}
}
</script>