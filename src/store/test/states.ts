import { TestList, TestState } from '@/store/test/types';

const list: TestList[] = [
  {
    id: '1',
    name: 'option 1',
  },
  {
    id: '2',
    name: 'option 2',
    children: [
      {
        id: '2-1',
        name: 'option 2-1',
      },
      {
        id: '2-2',
        name: 'option 2-2',
      },
    ],
  },
];

export const testState: TestState = {
  list: list,
  selectedId: '',
};
