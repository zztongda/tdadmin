<template>
  <div>
    <el-row>
 
  <el-col :span="15">
    <div>

<el-form ref="form" label-width="80px" size="mini">
  <el-form-item label="活动名称">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="活动区域">
    <el-select v-model="form.region"  placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="活动时间">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期"
      v-model="form.date1" 
      value-format="yyyy-M-d" 
      format="yyyy-M-d" ></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker placeholder="选择时间" v-model="form.date2" 
value-format="h:m:s"
format="h:m:s" 
      ></el-time-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="即时配送">
    <el-switch v-model="form.delivery"
    active-value="是"
    inactive-value="否" ></el-switch>
  </el-form-item>
  <el-form-item label="活动性质">
    <el-checkbox-group v-model="form.type">
      <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
      <el-checkbox label="地推活动" name="type"></el-checkbox>
      <el-checkbox label="线下主题活动" name="type"></el-checkbox>
      <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="特殊资源">
    <el-radio-group v-model="form.resource">
      <el-radio label="线上品牌商赞助"></el-radio>
      <el-radio label="线下场地免费"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="活动形式">
    <el-input type="textarea"  autosize v-model="form.desc"></el-input>
  </el-form-item>
  <el-form-item    label="连级选择">

  <el-cascader
    v-model="form.lianji"
    :options="options"></el-cascader>
  </el-form-item>

  <el-form-item    label="数量">
<el-input-number v-model="form.num" 
 :min="1" :max="10" label="描述文字"></el-input-number>

  </el-form-item>
  <el-form-item    label="slider">
    <el-slider
      v-model="form.slider"
      @change="sliderChange"
      show-input>
    </el-slider>
  </el-form-item>
  <el-form-item    label="评分">
    <el-rate v-model="form.pingfen" :max="9" show-score   allow-half></el-rate>
  </el-form-item>

  <el-form-item    label="颜色">
    <el-color-picker  show-alpha v-model="form.color1"></el-color-picker>
  </el-form-item>

  <el-form-item    label="多选下拉">
   


  <el-select
    style="width: 500px"
    v-model="form.duoxuan"
    multiple
    filterable
    allow-create
    default-first-option
    placeholder="请选择文章标签">
    <el-option
      v-for="item in options1"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>


  </el-form-item>



  <el-form-item  label="上传文件">
    <uploadFile :fileList="form.fileList"></uploadFile>
  </el-form-item>

  <el-form-item    label="上传图片">
    <uploadFile listType="picture-card" :fileList="form.fileListtu"></uploadFile>
  </el-form-item>


<el-form-item    label="列表控件"> 

  <el-button @click="xz">新增</el-button>
 <table>
      <tr>
        <td>序号</td>
        <td>姓名</td>
        <td>性别</td>
        <td>年龄</td>
        <td>操作</td>
      </tr>
      <tr  v-for="(tr,index) in form.list" >
        <td>{{index+1}}</td>
        <td><input type=""  v-model="tr.xm" ></td>
        <td>
        <select v-model="tr.xb">
            <option value="男">男</option>
            <option value="女">女</option>
            <option value=""></option>
        </select>

        </td>
        <td><input type=""  v-model="tr.nl" ></td>
        <td>
          <el-link type="danger" @click.prevent="sc(tr)" :underline="false">删除</el-link>
        </td>
      </tr>
    </table>
    </el-form-item>

    <el-form-item   label="富文本编辑器"> 
      <tinymce-editor ref="editor"
            v-model="form.fuwenben"

            language="zh_CN"
            skin="oxide-dark"
            >
          </tinymce-editor>
    </el-form-item>

    <el-form-item> 
      <el-button type="primary" @click="onSubmit">提交</el-button>
      <el-button>取消</el-button>
    </el-form-item>
</el-form>


  </div></el-col>


  <el-col :span="9"><div>
  <JsonViewer :value="form" :expand-depth=4 copyable  sort></JsonViewer>

</div></el-col>


</el-row>



  </div>
  
</template>
<script>
  import JsonViewer from 'vue-json-viewer'
  import uploadFile from '@/components/upfile.vue'
  import qs from 'qs'
  import TinymceEditor from '@/components/tinymce-editor/tinymce-editor'
  export default {
    components: { uploadFile,TinymceEditor,JsonViewer },

    data() {
      return {
        form: {
          duoxuan:[],
          name: '666',
          region: '',
          date1: null,
          slider:20,
          pingfen:1,
          color1:'rgba(19, 35, 210, 0.88)',
          date2: '',
          delivery: false,
          type: ['地推活动'],
          resource: '',
          desc: '',
          num:'',
          fuwenben:'TinymceEditor',
          list: [{"xm": "张三","xb": "女", "nl": "18"},],
          lianji: ["zhinan","daohang","dingbudaohang"],
          fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
          fileListtu: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]

      
        },
        options: [],
        options1: [{
          value: 'HTML',
          label: 'HTML'
        }, {
          value: 'CSS',
          label: 'CSS'
        }, {
          value: 'JavaScript',
          label: 'JavaScript'
        }],
      }
    },
    mounted:function(){

          this.http({url:'vue.php?c=api&a=options'}).then(data => {
            //console.log(data);
            this.options=data;
          })

        // axios.get('c=admin&page=1&limit=5&field=time&order=desc').then(response => {
        //         if (response.data) {
        //             console.log(response.data)
        //         }
        //     }).catch(err => {
        //         alert('请求失败')
        //     })
      

      //this.options
    },
    methods: {
      sliderChange(val){
        console.log(val);
      },
      onSubmit() {
          this.http({
            method: 'post',
            data:qs.stringify(this.form),
            url:'vue.php?c=api&a=save'}).then(data => {

            //console.log(data);
            
          })


        console.log(this.form);
      },
      //列表控件新增,删除
      xz(){
        this.form.list.push({xm:'',xb:'女',nl:'1'});        
      },
      sc(item) {
        var index = this.form.list.indexOf(item)
        if (index !== -1) {
          this.form.list.splice(index, 1)
        }
      },
    }
  }
</script>
<style>
  
  .c{width:500px; padding: 20px;}
  /*.el-form-item{border: solid 1px #ccc;}*/
</style>