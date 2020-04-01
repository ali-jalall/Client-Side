import Vue from 'vue';
import App from './App.vue';
import store from './store/index';
import router from "./router/index";
import Axios from 'axios';
// import VueTouch from 'vue-touch';
import layoutMixin from './mixins/layout';
import Toasted from 'vue-toasted';
// import $ from 'jquery'
import VueCookie from 'vue-cookie'
import { BootstrapVue } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue)
Vue.use(VueCookie)
// Vue.use(VueTouch)
Vue.mixin(layoutMixin)
Vue.use(Toasted, { duration: 10000 });

// Vue.use($)

Vue.prototype.$http = Axios;
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
