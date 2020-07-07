<template>
  <div>
  <el-upload
    class="upload-demo"
    :accept="accept"
    :action="action"
    :list-type="listType"
    :on-success="handle_success"
    :on-remove="handle_remove"
    multiple
    :limit="3"
    :file-list="fileList"
    >

    <i class="el-icon-plus" v-if="listType == 'picture-card'"></i>
    <el-button size="small" v-else type="primary">点击上传</el-button>

    <div slot="tip" class="el-upload__tip">只能上传视频文件，且不超过500M</div>
  </el-upload>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        accept:'',
        action:'http://106.3.45.23/td/vue.php?c=api&a=upload',

      };
    },
    computed:{
        //flist1:function(){return this.flist;}
    },
    props:['fileList','listType'],
    mounted:function(){
     if(this.listType == 'picture-card' || this.listType == 'picture'){
        this.accept="image/*"
     }
      
      // this.flist11=this.flist;
      // console.log(this.flist);
    },
    methods: {
    handle_remove(file, fileList) {
      var _tmp = this.fileList;
      for (var i = 0, len = _tmp.length; i < len; i++) {
        if (_tmp[i].name = file.name) {
          _tmp.splice(i, 1);
          break;
        }
      }
      this.fileList = _tmp;
    },

    handle_success(response, file, fileList) {
      this.fileList.push({
        name: file.name,
        url: file.response
      });
    },


    }
  }

</script>

