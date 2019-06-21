import { GetterTree } from 'vuex';

import { IRootState, IMockState } from '@/types';

export const getters: GetterTree<IMockState, IRootState> = {
    getClientID({ clientID }): string {
        return clientID;
    },

    getPlaylistUrl({ playlistUrl }): string {
        return playlistUrl;
    }
};
