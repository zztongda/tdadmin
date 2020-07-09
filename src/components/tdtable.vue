<template>

<el-table style="width: 100%" border :data="tableData">
  <template v-for="(item,index) in tableHead">
    <el-table-column :prop="item.column_name" :label="item.column_comment" :key="index" v-if="item.column_name != 'id'"></el-table-column>
  </template>
</el-table>

</template>
<script>
	import stable from '@/views/zujian/table'
    export default {
     props:['tableData','tableHead'],
     mounted(){

      //console.log(this.tableData);
     }
    }
</script>