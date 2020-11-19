import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store.js'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'

import ListMessages from './components/ListMessages';
import NewMessages from './components/NewMessage';

Vue.use(Vuetify);
Vue.use(VueRouter);

const routes = [
  {path: "/", component: ListMessages},
  {path: "/NewMessage", component: NewMessages}
]

const router = new VueRouter({routes, mode: 'history'})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
