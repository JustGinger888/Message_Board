import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store.js'
import Vuetify from 'vuetify'

Vue.use(Vuetify);

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
