import { GetterTree } from 'vuex';
import { State } from '@/store/types';
import { TestState } from '@/store/test/types';

export const testGetters: GetterTree<TestState, State> = {
  // 获取第一级全部的 id 数组
  rootIds(state): string[] {
    const arr: string[] = [];
    state.list.forEach(item => {
      if (item.id) {
        arr.push(item.id);
      }
    });
    return arr;
  },
};
