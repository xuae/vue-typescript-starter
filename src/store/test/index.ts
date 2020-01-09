import { Module } from 'vuex';
import { State } from '@/store/types';
import { testActions } from '@/store/test/actions';
import { testGetters } from '@/store/test/getters';
import { testMutations } from '@/store/test/mutations';
import { TestState } from '@/store/test/types';
import { testState } from '@/store/test/states';

const namespaced = true;

export const test: Module<TestState, State> = {
  namespaced,
  state: testState,
  getters: testGetters,
  actions: testActions,
  mutations: testMutations,
};
export default testState;
