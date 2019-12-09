import { Module } from 'vuex';

import { IRootState } from '../types';
import { IUserState } from './types';

import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';

export const initialState = {
    user: undefined,
    error: ''
};

const state: IUserState = initialState;
const namespaced: boolean = true;

export const user: Module<IUserState, IRootState> = {
    state,
    actions,
    mutations,
    getters,
    namespaced
};
