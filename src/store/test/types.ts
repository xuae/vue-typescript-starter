// test state 接口
export interface ITestState {
  list: ITestList[];
  selectedId: string;
}

// test list 接口
export interface ITestList {
  id: string;
  name: string;
  children?: null | ITestList[];
}
