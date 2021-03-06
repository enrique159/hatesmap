import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuesax from 'vuesax'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'vuesax/dist/vuesax.css'
import 'mapbox-gl/dist/mapbox-gl.css';
import VueMapbox from "vue-mapbox";
import Mapbox from "mapbox-gl";
import 'boxicons'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(VueMapbox, { mapboxgl: Mapbox });
Vue.use(Vuesax, {
  // options here
})

axios.defaults.baseURL = 'https://hatesmaps.herokuapp.com/'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
