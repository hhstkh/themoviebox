// Import Vue

import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

// Import Vue App, routes, store
import App from './App';
import './App.scss';




// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


new Vue({
    el: '#app',
    render: h => h(App)
});


