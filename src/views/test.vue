<template>

  <div>
    <h1>测试页</h1>
    123

<el-row class="tac">
  <el-col :span="12">
    <h5>内容区</h5>

<router-view style="margin-left:250px"></router-view>
  </el-col>
  <el-col :span="12">
    <h5>自定义颜色</h5>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @select="handleSelect"
      router
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="/table3">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</el-row>

  </div>

</template>
<script>
  

// axios.defaults.timeout = 5000 // 请求超时
// axios.defaults.baseURL ='http://106.3.45.23/td/vue.php?';

   export default {
    mounted:function(){

          this.$router.addRoutes([
            {
              path: '/test',
              component: () => import(/* webpackChunkName: "about" */ '../views/test.vue'),
              children:[
                {
                  path: '/table3',
                  title:'数据表格',
                  component: () => import('../views/table.vue')
                }]
            }
          ]);

    },

    methods:{

      handleSelect(key, keyPath) {
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      dl:function(){

     console.log(this.$router.options.routes);

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
