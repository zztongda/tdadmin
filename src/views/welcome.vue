<template>
  <div>
    <h1>welcome!</h1>





<el-row :gutter="20">
  <el-col :span="6"><div>
  	
  	<el-card class="box-card"  style="height:180px;">
  <div class="text item">

  	<div style="width: 120px; float: left"><img src="@/assets/logo.png" style="width: 100px;"></div>
  	<div style="float: left">

  	  <h1>系统管理</h1>
  	  <h4 style="color: #666">管理员，库管员</h4>
  	  <span style="background-color: #aaa; padding: 5px; font-size: 12px; color: #fff">未绑定微信</span>

  	</div>
    
  
  </div>
</el-card>


  </div></el-col>
  <el-col :span="12">

   

   <el-card class="box-card"  style="height:180px;">
	  <div slot="header" class="clearfix">
	    <span>快捷操作</span>
	    <el-button style="float: right; padding: 3px 0" type="text">设置</el-button>
	  </div>
	  <div class="text item">
	    <div class="iconlist"> 
		  	<div>
			    <i class="el-icon-edit"></i>
			    <div>快捷1</div>
		    </div>
		  	<div>
			    <i class="el-icon-share"></i>
			    <div>快捷2</div>
		    </div>
		  	<div>
			    <i class="el-icon-delete"></i>
			    <div>快捷3</div>
		    </div>


		</div>


	  </div>
	</el-card>


	</el-col>

  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>


<el-row :gutter="20">

<el-col :span="6" style="height:100px; ">
	
	  <div class="text item" style="text-align: right;background-color: #3faba4; color: #fff; padding: 20px;">
	  	<h1>100</h1>
	    水电费水电费
	  </div>
	
</el-col>


<el-col :span="6">
	<el-card class="box-card"
	  style="height:100px; background-color: #3faba4; color: #fff">
	  <div class="text item">
	    水电费水电费
	  </div>
	</el-card>
</el-col>


<el-col :span="6">
	<el-card class="box-card"
	  style="height:100px; background-color: #4c87b9; color: #fff">
	  <div class="text item">
	    水电费水电费
	  </div>
	</el-card>
</el-col>


<el-col :span="6">
	<el-card class="box-card"
	  style="height:100px; background-color: #d05454; color: #fff">
	  <div class="text item">
	    水电费水电费
	  </div>
	</el-card>
</el-col>


</el-row>


<el-row :gutter="20">
  <el-col :span="10"><div>
  	
  	<el-card class="box-card"  >
  <div class="text item">

    

    <el-calendar>
  <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
  <template
    slot="dateCell"
    slot-scope="{date, data}">
    <p :class="data.isSelected ? 'is-selected' : ''">
      {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}
    </p>
  </template>
</el-calendar>



  </div>
</el-card>


  </div></el-col>
</el-row>



  </div>
</template>
<script>
	export default{
		mounted () {
		   


		  },		
	}




</script>
<style type="text/css">
	h1,h2,h3,h4{padding: 0px; margin: 0px;}
.iconlist>div{padding: 10px; width: 60px; float: left;border: solid 1px #ccc; margin: 0px 5px; text-align: center;border-radius:5px; background-color: #1cbbb4}
.iconlist i{clear: both; font-size: 30px; color: #fff}
.iconlist>div>div{clear: both; font-size: 14px;}
 .is-selected {
    color: #1989FA;
  }


.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
}




</style>
