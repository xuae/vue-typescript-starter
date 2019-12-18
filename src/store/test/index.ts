import { IState } from '@/store/types';
import { ITestState } from '@/store/test/types';
import { Module } from 'vuex';
import { testActions } from '@/store/test/actions';
import { testGetters } from '@/store/test/getters';
import { testMutations } from '@/store/test/mutations';
import { testState } from '@/store/test/states';

const namespaced = true;

export const test: Module<ITestState, IState> = {
  namespaced,
  state: testState,
  getters: testGetters,
  actions: testActions,
  mutations: testMutations,
};
export default testState;
