<template>
  <div class="uploads">
<UploadFile ref="child" v-model="fileList"/>
<br>
 <el-button type="primary" @click="submitForm()">保存数据</el-button>
</div>

</template>

<script>
import UploadFile from '@/components/UploadFile.vue'

export default {
  components: {
    UploadFile
  },
  computed:{
    vfileList:function(){
        return this.$refs.child.fileListsss;
    },      
  },
  // props: {
  //   doUploadUrl:'http://106.3.45.23/td/vue.php?c=admin&a=uploads',
  // },

  data(){
    return{  
      fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      
      //doUploadUrl:'http://106.3.45.23/td/vue.php?c=admin&a=uploads' ,
    
    }   
  },
  methods: {
    submitForm(){
      //console.log(this.$refs.child.fileList);
      //this.fileList.push(this.vfileList)
      console.log(this.vfileList);
      
      for (var i in this.vfileList ) {
        this.fileLists.push(this.vfileList[i])        
      }
      console.log(JSON.stringify(this.fileList));

      return false;
    }
  },
  mounted() {
    this.$refs.child.doUploadUrl='http://106.3.45.23/td/vue.php?c=admin&a=uploads'
    this.$refs.child.fileList=this.fileList
  }
}
</script>