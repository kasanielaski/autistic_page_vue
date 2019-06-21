import { Module } from 'vuex';

import { IRootState, IMockState } from '@/types';

import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';

export const initialState = {
    mockValue: 'mock',
    clientID: 'FvkgucGq5QyPAepKyYOUkjEQq2zLVKPb'
};

const state: IMockState = initialState;
const namespaced: boolean = true;

export const mock: Module<IMockState, IRootState> = {
    state,
    actions,
    mutations,
    getters,
    namespaced
};
