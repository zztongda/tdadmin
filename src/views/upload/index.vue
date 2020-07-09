<template>
  <div id="app">
    <upload-file :url="/test/"/>
  </div>
</template>

<script>
import  UploadFile from './UploadFile'
export default {
  name: 'app',
  components: { UploadFile},
  data() {
    return {
      url:'123',     //文件上传到的目的url
    }
  }
}
</script>