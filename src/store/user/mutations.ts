import { MutationTree } from 'vuex';

import { IUserState, UserT } from './types';

export const mutations: MutationTree<IUserState> = {
    setUser(state, payload: UserT) {
        state.user = payload;
    },

    setError(state, payload: string) {
        state.error = payload;
    },

    clearError(state) {
        state.error = '';
    }
};
