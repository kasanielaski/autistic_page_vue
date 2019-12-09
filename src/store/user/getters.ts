import { GetterTree } from 'vuex';

import { IRootState } from '../types';
import { IUserState } from './types';

export const getters: GetterTree<IUserState, IRootState> = {
    getUser({ user }) {
        return user;
    },

    getError({ error }) {
        return error;
    },

    getUserName({ user }) {
        return user ? user.username : '';
    },

    getToken({ user }) {
        return user ? user.token : '';
    },

    getUserID({ user }) {
        return user ? user.id : null;
    }
};
