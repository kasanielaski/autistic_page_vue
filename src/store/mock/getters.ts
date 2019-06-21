import { GetterTree } from 'vuex';

import { IRootState, IMockState } from '@/types';

export const getters: GetterTree<IMockState, IRootState> = {
    getMockValue({ mockValue }): string {
        return mockValue;
    },

    getClientID({ clientID }): string {
        return clientID;
    }
};
