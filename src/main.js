import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import  request from '@/plugins/request'
import axiox from 'axios'

//import '@/styles/index.scss' // global css
//import 'normalize.css/normalize.css' // a modern alternative to CSS resets


// import JsonViewer from 'vue-json-viewer'
// Vue.use(JsonViewer)
Vue.prototype.axiox = axiox


//图表 引入

import Highchart from "highcharts/highcharts";
import HighchartsVue from "highcharts-vue";
import stockInit from "highcharts/modules/stock";

stockInit(Highchart);
Vue.use(HighchartsVue);

//图表


//import  http from '@/plugins/cc'

Vue.prototype.http = request
Vue.use(ElementUI);


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
