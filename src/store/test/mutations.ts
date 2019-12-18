import { ITestState } from '@/store/test/types';
import { MutationTree } from 'vuex';

export const testMutations: MutationTree<ITestState> = {
  setSelectedId(state, value: string): void {
    state.selectedId = value ? value : '';
  },
};
