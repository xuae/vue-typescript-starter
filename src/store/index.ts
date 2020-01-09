import { State } from '@/store/types';
import { test } from '@/store/test/index';
import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

Vue.use(Vuex);

const store: StoreOptions<State> = {
  modules: {
    test,
  },
};
export default new Vuex.Store<State>(store);
