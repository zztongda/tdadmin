<template>
<el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="">
  <span>这是一段信息 {{dialogVisible}}</span>
  <div>
    <stable></stable>
  </div>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>

</template>
<script>
	import stable from '@/views/zujian/table'
    export default {
      components:{stable},
      data() {
        return {
        dialogVisible:true,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
        }
        }
      },
      methods:{
      }
    }
</script>