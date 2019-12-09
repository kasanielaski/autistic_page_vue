import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
// @ts-ignore
import CarbonComponentsVue from '@carbon/vue';
Vue.use(CarbonComponentsVue);

Vue.config.productionTip = false;

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app');
