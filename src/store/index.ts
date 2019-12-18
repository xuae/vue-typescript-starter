import { IState } from '@/store/types';
import { test } from '@/store/test/index';
import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

Vue.use(Vuex);

const store: StoreOptions<IState> = {
  modules: {
    test,
  },
};
export default new Vuex.Store<IState>(store);
