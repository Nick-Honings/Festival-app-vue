import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './views/app/App';
import Vuesax from 'vuesax';

import store from '../src/auth/index'



import VueLogger from 'vuejs-logger';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vuesax/dist/vuesax.css';
import 'material-icons/iconfont/material-icons.css';
import router from './router'

import Vuelidate from 'vuelidate';

import { domain, clientId } from '../auth_config.json';
import { Auth0Plugin } from "./auth/index23";


Vue.config.productionTip = false;

const options = {
  isEnabled: true,
  logLevel: 'debug',
  stringifyArguments: false,
  showLogLevel: true,
  showMethodName : false,
  separator: '|',
  showConsoleColors: true
};

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(
        appState && appState.targetUrl
            ? appState.targetUrl
            : window.location.pathname
    );
  }
});

//Vue.use(BootstrapVue);
Vue.use(VueLogger, options);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Vuelidate);



//Configure this to only add the used components
Vue.use(Vuesax);

import Vuetify from 'vuetify'
import DaySpanVuetify from 'dayspan-vuetify'
import 'vuetify/dist/vuetify.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'dayspan-vuetify/dist/lib/dayspan-vuetify.min.css'

Vue.config.productionTip = false

Vue.use(Vuetify);

Vue.use(DaySpanVuetify, {
  methods: {
    getDefaultEventColor: () => '#1976d2'
  }
});


new Vue({
  el: '#app',
  template: '<App/>',
  router,
  store,
  components: { App }
});
