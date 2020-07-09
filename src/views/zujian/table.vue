<template>
  <div>
  <h1>表格组件的用法</h1>

{{multipleSelection}}
    <el-table
      :data="tableData1"
      @selection-change="handleSelectionChange">
      style="width: 100%"
      size="small"
      height="150"
      >
     <el-table-column
      type="selection"
      width="55">
    </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>

  <hr>
  <tdtable :tableHead="tableHead" :tableData="tableData"></tdtable>
    </div>
  </template>

  <script>
  import tdtable from '@/components/tdtable'
    export default {
      components:{tdtable},
      data() {
        return {

          //javascript
          // 表头数据
          tableHead:[
              {
                column_name: "column_name",column_comment:"姓名"
              },
              {
                column_name: "column_age",column_comment:"年龄"
              },
              {
                column_name: "column_sex",column_comment:"性别"
              }
          ],
          // 表格数据
          tableData: [{
              column_age: '3',
              column_name: '鞠婧祎',
              column_sex: '女'
            },
            {
              column_age: '25',
              column_name: '魏大勋',
              column_sex: '男'
            },
            {
              column_age: '18',
              column_name: '关晓彤',
              column_sex: '女'
          }],
          multipleSelection:[],
          tableData1: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      },
      methods:{
        handleSelectionChange(val){
          this.multipleSelection= val;
        }
      }
    }
  </script>
