import Vue from 'vue';
import Router from 'vue-router';

import store from './store';

import Auth from './views/Auth.vue';
import Services from './views/Services.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/auth',
            name: 'auth',
            component: Auth
        },
        {
            path: '/services',
            name: 'services',
            component: Services
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (store.getters['user/getUser'] || to.name === 'auth') {
        next();
    } else {
        next({ name: 'auth' });
    }
});

export default router;
