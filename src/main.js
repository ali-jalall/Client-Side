import Vue from 'vue';
import App from './App.vue';
import store from './store/index';
import router from "./router/index";
import Axios from 'axios';
// import $ from 'jquery'
import VueCookie from 'vue-cookie'
import { BootstrapVue } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

Vue.use(BootstrapVue)
Vue.use(VueCookie)
// Vue.use($)

import Default from './Layout/Wrappers/baseLayout.vue';
import Pages from './Layout/Wrappers/pagesLayout.vue';

Vue.component('default-layout', Default);
Vue.component('userpages-layout', Pages);


Vue.prototype.$http = Axios;
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
