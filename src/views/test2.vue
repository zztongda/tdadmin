<template>

  <div>
    <h1>测试页</h1>
    123
    <el-form ref="loginForm">
      
      <input type="" name="uname">
      <input type="" name="password" ref="password">
      <input type="button" name="" @click="dl" value="登录">
    </el-form>
  </div>

</template>
<script>


// axios.defaults.timeout = 5000 // 请求超时
// axios.defaults.baseURL ='http://106.3.45.23/td/vue.php?';

   export default {

    methods:{
      dl:function(){

          console.log(this.$refs.loginForm);
          

this.$refs.loginForm.validate(valid => {

   
   console.log(valid);
 });

     

        alert();
      }
    }

   }
   // 				mounted() {

   // 					console.log(this.router);

   // 					//this.http.get()

 		// 		// request({
   //   //                url: 'c=admin&page=1&limit=5&field=time&order=desc',
   //   //                // method: 'post'
   //   //            }).then(response => {
   //   //                this.dt=response;
                   
   //   //            }).catch(err => {
   //   //                alert('请求失败')
   //   //            })
			// }

               
   //  }
</script>



<style>

</style>
