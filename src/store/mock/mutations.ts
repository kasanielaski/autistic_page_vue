import { MutationTree } from 'vuex';

import { IMockState } from '@/types';

export const mutations: MutationTree<IMockState> = {
    mockAction(state, payload: string) {
        state.mockValue = payload;
    }
};
