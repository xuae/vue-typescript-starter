import { GetterTree } from 'vuex';
import { IState } from '@/store/types';
import { ITestState } from '@/store/test/types';

export const testGetters: GetterTree<ITestState, IState> = {
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
