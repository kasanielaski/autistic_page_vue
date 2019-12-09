import { ActionTree } from 'vuex';
import httpClient from '../httpClient';

import { IRootState } from '../types';
import { IUserState, UserT } from './types';
import { IResponseData } from '@/types';
import { AxiosError } from 'axios';

export const actions: ActionTree<IUserState, IRootState> = {
    async authorize(
        { commit, dispatch },
        { login, password }: { login: string; password: string }
    ) {
        await httpClient
            .post(process.env.VUE_APP_API_URL, {
                jsonrpc: '2.0',
                method: 'api.user.auth',
                params: {
                    usernameOrEmail: login,
                    password
                },
                id: 1
            })
            .then(({ data }: { data: IResponseData<UserT> }) => {
                if (typeof data.result === 'string') {
                    commit('setError', data.result);
                    dispatch('error/setError', new Error(data.result), {
                        root: true
                    });
                } else {
                    commit('setUser', data.result);
                    commit('clearError');
                }
            })
            .catch((error: AxiosError) => {
                dispatch('error/setError', error, { root: true });
            });
    }
};
