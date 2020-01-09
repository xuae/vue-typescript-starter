import { MutationTree } from 'vuex';
import { TestState } from '@/store/test/types';

export const testMutations: MutationTree<TestState> = {
  setSelectedId(state, value: string): void {
    state.selectedId = value ? value : '';
  },
};
