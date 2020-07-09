<template>
  <div>   	
  	<h5>base64图</h5>
  <tinymce-editor ref="editor"
    v-model="form.fuwenben"
    language="zh_CN"
    skin="oxide-dark"
    >
  </tinymce-editor>
<h5>上传图片</h5>

  </div>
</template>

<script>
import TinymceEditor from '@/components/tinymce-editor/tinymce-editor'

export default {
	components: { TinymceEditor},
	data(){
		return {
			form:{
				fuwenben:"",
			}

		}
	}

}
</script>


