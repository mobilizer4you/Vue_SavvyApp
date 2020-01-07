import Vue from 'vue'
import './assets/scss/app.scss'
import App from './App.vue'
import router from './router'
import store from './store'
const fb = require('./firebaseconfig')

Vue.config.productionTip = false

// handle page reloads
let app
fb.auth.onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      store,
      render: h => h(App)
    })
  }
})
