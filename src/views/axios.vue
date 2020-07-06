<template>
  <div>

    <h1>axios  request.js</h1>
    <div>{{ dt }}</div>
	<div>
        <button @click="get">get</button>
        <!-- <button @click="testAxios">TestAxios</button> -->
    </div>
  </div>


</template>
<script>

//import  request from '@/plugins/request'


// axios.defaults.timeout = 5000 // 请求超时
// axios.defaults.baseURL ='http://106.3.45.23/td/vue.php?';

   export default {

        data(){
            return {
                dt:'未请求'
            }
        },
        methods: {
            get(){

                request({
                    url: 'c=admin&page=1&limit=5&field=time&order=desc',
                    // method: 'post'
                }).then(response => {
                    this.dt=response;
                   
                }).catch(err => {
                    alert('请求失败')
                })


            },
            // testAxios() {
            //     // 由于 main.js 里全局定义的 axios,此处直接使用 $axios 即可。
            //     // 由于 main.js 里定义了每个请求前缀，此处的 / 即为 /api/， 
            //     // 经过 vue.config.js 配置文件的代理设置，会自动转为 https://www.baidu.com/，从而解决跨域问题
            //     axios.get('c=admin&page=1&limit=5&field=time&order=desc').then(response => {
            //         if (response.data) {
            //             console.log(response.data)
            //         }
            //     }).catch(err => {
            //         alert('请求失败')
            //     })
            // }
        }
    }
</script>
