import Vue from 'vue';
import App from './App.vue';
import router from "./router/index";
import Axios from 'axios';
// import $ from 'jquery'
import { BootstrapVue } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
// import NavBar from './components/NavBar'
// import Footer from './components/Footer'

Vue.use(BootstrapVue)
// Vue.use($)

// Vue.component('NavBar', NavBar);
// Vue.component('Footer', Footer);
Vue.prototype.$http = Axios;
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
