import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

import { IRootState } from './types';

import { user } from './user';

Vue.use(Vuex);

const store: StoreOptions<IRootState> = {
    state: {},
    modules: {
        user
    }
};

export default new Vuex.Store<IRootState>(store);
