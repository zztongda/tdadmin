<template>
  <div class="block">
     <div><json-viewer :value="form" :expand-depth=4 copyable  sort></json-viewer></div>




    <span class="demonstration">起始日期时刻为 12:00:00</span>
    <el-date-picker
      v-model="form.value6"
      @change="dateChangebirthday1"
      type="datetimerange"
      format="yyyy-MM-dd HH:mm"
      value-format="yyyy-MM-dd HH:mm"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :default-time="['12:00:00']"
    ></el-date-picker>


<hr>

<el-time-select
  v-model="form.value"
  :picker-options="{
    start: '08:30',
    step: '00:15',
    end: '18:30'
  }"
  placeholder="选择时间">
</el-time-select>

<hr>
  <el-date-picker  placeholder="选择日期111"
   v-model="form.date1"
   value-format="yyyy-MM-dd"
   ></el-date-picker>

<hr>







选择周
   <el-date-picker
      v-model="form.zhou"
      type="week"
      value-format="WW"
      format="yyyy 第 WW 周"
      placeholder="选择周">
    </el-date-picker>


<el-button type="primary" icon="el-icon-search" @click="tj">提交</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        date1:"2019-01-01",
        value1:"2019-01-03",
        endTime:'',
        zhou:'22',
        startTime:'',
        value6: "",
        value: '',
        startTime: ""
      }
    };
  },
  methods: {
    tj(){
        console.log(this.form);

    },
    dateChangebirthday1(val) {
      // this.startTime = val;
      // console.log(this.startTime);
      console.log(val);
    }
  }
};
</script>