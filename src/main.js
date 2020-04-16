import Vue from 'vue';
import App from './App.vue';
import store from './store/index';
import router from "./router/index";
import Axios from 'axios';
import layoutMixin from './mixins/layout';
import Toasted from 'vue-toasted';
import VueCookie from 'vue-cookie'
import VueTouch from 'vue-touch'
import Vuelidate from 'vuelidate'
import Loading from "vue-loading-overlay";
import { BootstrapVue } from 'bootstrap-vue';

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import './assets/css/bootstrap.min.css'
import './assets/css/now-ui-kit.min.css'

import './assets/js/core/jquery.min.js'
import './assets/js/core/popper.min.js'
import './assets/js/core/bootstrap.min.js'
import './assets/js/now-ui-kit.min98f3.js'

import "vue-loading-overlay/dist/vue-loading.css";


import Widget from './components/Widget/Widget';



Vue.use(BootstrapVue)
Vue.use(VueCookie)
Vue.use(VueTouch)
Vue.mixin(layoutMixin)
Vue.use(Toasted, { duration: 10000 });
Vue.use(Vuelidate)
Vue.use(Loading)


Vue.prototype.$http = Axios;
Vue.config.productionTip = false
Vue.component('Widget', Widget);


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
