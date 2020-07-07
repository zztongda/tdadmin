<template>
  <div>
  <h1>富文本编辑器</h1>

 <el-row>
  <el-col :span="15">
  <div>

    {{ msg }}
    <tinymce-editor ref="editor"
      v-model="msg"
      :disabled="disabled"
      :base-url="baseUrl"
      :language="language"
      :skin="skin"
      @onClick="onClick">
    </tinymce-editor>
    <button @click="clear">清空内容</button>
    <button @click="disabled = true">禁用</button>
    <button @click="disabled = false">启用</button>

  </div>
</el-col>


<el-col :span="9"><div>
   <!-- <json-viewer :value="form" :expand-depth=4 copyable  sort></json-viewer> -->

</div></el-col>

</el-row>
  </div>
</template>

<script>
  import TinymceEditor from '@/components/tinymce-editor/tinymce-editor'
export default {
  components: {
    TinymceEditor
  },
    data() {
      return {
        msg:"TinymceEditor 编辑器",
        disabled: false,
        baseUrl: process.env.NODE_ENV === 'production' ? '/vue-use-tinymce' : '',
        language: 'zh_CN',
        skin: 'oxide',
        //form:[]
      };
    },
    methods: {

        onClick (e, editor) {
          console.log('Element clicked')
          console.log(e)
          console.log(editor)
        },
        // 清空内容
        clear () {
          this.$refs.editor.clear()
        }

    }
  }
</script>

<style type="text/css">
  table { border-collapse:collapse; }
  td{border-bottom: solid 1px #ccc;}
</style>