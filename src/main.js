import Vue from 'vue';
import App from './App.vue';
import store from './store/index.js';
//import './styles.css';

//font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.config.productionTip = false
library.add(fas, far, fab);

Vue.component('Icon', FontAwesomeIcon);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

/**
 * TO PUSH TO GITHUB
 * npm run build
 * git add .
 * git commit -m "..."
 * git subtree push --prefix dist origin gh-pages
**/
