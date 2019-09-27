// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import $ from "jquery"
import ElementUI from  'element-ui'

import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/index.js'

import JetTab from './components/JetTab.vue'
// 全局注册
Vue.component('JetTab',JetTab);

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueRouter);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  render:h=>h(App)
});
