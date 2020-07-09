<template>
  <div>
  <h1>列表控件1</h1>

      <el-row>
  <el-col :span="15">
  <div>
    <el-form :model="form" ref="form" label-width="100px" class="demo-dynamic">
  <el-form-item
    prop="email"
    label="邮箱"
    :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
    ]"
  >
    <el-input v-model="form.email"></el-input>
  </el-form-item>
  <el-form-item
    v-for="(domain, index) in form.domains"
    :label="'域名' + index"
    :key="domain.key"
    :prop="'domains.' + index + '.value'"
    :rules="{
      required: true, message: '域名不能为空', trigger: 'blur'
    }"
  >
    <el-input v-model="domain.value"></el-input><el-button @click.prevent="removeDomain(domain)">删除</el-button>
  </el-form-item>
  <el-form-item>
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

    <el-button type="primary" @click="submitForm('form')">提交</el-button>
 <el-button @click="xz">新增</el-button>
    <el-button @click="resetForm('form')">重置</el-button>
  </el-form-item>
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
  export default {
    data() {
      return {
        form: {
  "list": [
    {
      "xm": "张三",
      "xb": "女",
      "nl": "18"
    },
    {
      "xm": "卡视角",
      "xb": "男",
      "nl": "17"
    },
    {
      "xm": "水电费",
      "xb": "女",
      "nl": "19"
    }
  ],
  "domains": [
    {
      "value": ""
    }
  ],
  "email": ""
}
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      xz(){
        this.form.list.push({xm:'',xb:'女',nl:'1'});        
      },
      sc(item) {
        var index = this.form.list.indexOf(item)
        if (index !== -1) {
          this.form.list.splice(index, 1)
        }
      },
      removeDomain(item) {
        var index = this.form.domains.indexOf(item)
        if (index !== -1) {
          this.form.domains.splice(index, 1)
        }
      },
      addDomain() {
        this.form.domains.push({
          value: '',
          key: Date.now()
        });
      }
    }
  }
</script>

<style type="text/css">
  table { border-collapse:collapse; }
  td{border-bottom: solid 1px #ccc;}
</style>