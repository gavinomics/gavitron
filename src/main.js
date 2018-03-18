import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';

// import Buefy from 'buefy'
// import 'buefy/lib/buefy.css'

Vue.config.productionTip = false
// Vue.use(Buefy)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})