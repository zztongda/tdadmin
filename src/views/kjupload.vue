<template>
  <div><h1>上传控件1</h1>
  <el-row>
  <el-col :span="15">
  <div>

<el-form :model="form" ref="form" label-width="100px" class="demo-dynamic">
<uploadFile  :fileList="form.fileList"></uploadFile>
</el-form>
  </div>
</el-col>


<el-col :span="9"><div>
  <json-viewer :value="form" :expand-depth=4 copyable  sort></json-viewer>

</div></el-col>



</el-row>
</div>
</template>

<script>


  import uploadFile from '@/components/upfile.vue'
  export default {
      components: { uploadFile },
        data() {
      return {
        // aa:'123',
        // bb:'',
        form:{
          fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]          
        }

      };
    },
    // computed:{
    //   bb:function(){return this.aa;}
    // },
    // mounted:function(){
    //   this.bb=this.aa;
    //   this.bb="666";
    //   alert(this.aa);
    // },
    methods: {


    handle_remove(file, fileList) {
      var _tmp = this.form.fileList;
      for (var i = 0, len = _tmp.length; i < len; i++) {
        if (_tmp[i].name = file.name) {
          _tmp.splice(i, 1);
          break;
        }
      }
      this.fileList = _tmp;
    },

    handle_success(response, file, fileList) {
      this.form.fileList.push({
        name: file.name,
        url: file.response
      });
    },


    }
  }

</script>

