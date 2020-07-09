<template>

  <div>
    <h1>旧版layui前端页收集</h1>
    <li v-for="i in urls">
     <a :href="i.url"  target="_blank">
     {{i.title}}</a>
    </li>


  </div>

</template>
<script type="text/javascript">
 export default  {

    data(){
      return {

        urls:[

          {
            title:"前端样式库",
            url:"http://106.3.45.23/frame/assets/td/style/qianduan.html"
          },
          {
            title:"通达PC端",
            url:"http://106.3.45.23/frame/assets/td/style/tdoa/"
          },
          {
            title:"通达手机端",
            url:"http://106.3.45.23/frame/assets/td/style/oa/"
          },
          {
            title:"微信UI weui",
            url:"http://106.3.45.23/frame/assets/td/style/wx/"
          },
          {
            title:"登录页面",
            url:"http://106.3.45.23/frame/assets/td/login/login.html"
          },
          {
            title:"layui",
            url:"http://106.3.45.23:202/assets/demo/style.html"
          },
          {
            title:"字体图标",
            url:"http://106.3.45.23/frame/assets/font/demo_index.html"
          },
          {
            title:"layuiadmin",
            url:"http://106.3.45.23/frame/assets/td/layui-admin/"
          },
          {
            title:"门户页面",
            url:" http://106.3.45.23/frame/assets/td/lanling/index.html"
          },
          ]
      }
    }
  }
</script>