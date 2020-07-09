<template>
  <div>
  <h1>弹出选择的用法</h1>
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
<el-form ref="form" :model="form" label-width="80px" style="width:600px">
  <el-form-item label="活动名称">
    <el-input v-model="form.name" @click.native="tdselect" suffix-icon="el-icon-search"></el-input>
  </el-form-item>

  <el-form-item>
    <el-button type="primary">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>



    </div>
  </template>

  <script>
    import stable from '@/views/table'
//import tdselect from '@/components/tdselect.vue'
    export default {
      components:{stable},
      data() {
        return {
          dialogVisible:false,
          scomponent:'',
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
        }
        }
      },
      methods:{
          tdselect(){
              this.dialogVisible=true

          }

      }
       
    }
  </script>
