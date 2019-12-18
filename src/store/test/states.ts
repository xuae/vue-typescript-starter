import { ITestList, ITestState } from '@/store/test/types';

const list: ITestList[] = [
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

export const testState: ITestState = {
  list: list,
  selectedId: '',
};
