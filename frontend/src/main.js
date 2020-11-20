import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store.js'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'

// Importing Routes Associated Components
import ListMessages from './components/ListMessages';
import NewMessages from './components/NewMessage';
import ViewMessages from './components/ViewMessage';
import Register from './components/Register';
import Login from './components/Login';

Vue.use(Vuetify);
Vue.use(VueRouter);

// Creating Routes for App
const routes = [
  {path: "/", component: ListMessages},
  {path: "/NewMessage", component: NewMessages},
  {path: "/ViewMessage/:id", component: ViewMessages},
  {path: "/Register", component: Register},
  {path: "/Login", component: Login}
]

const router = new VueRouter({routes, mode: 'history'})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
