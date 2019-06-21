import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

import { IRootState } from '@/types';

import { mock } from './mock';

Vue.use(Vuex);

const store: StoreOptions<IRootState> = {
    state: {},
    modules: {
        mock
    }
};

export default new Vuex.Store<IRootState>(store);
