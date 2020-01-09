// test state 接口
export interface TestState {
  list: TestList[];
  selectedId: string;
}

// test list 接口
export interface TestList {
  id: string;
  name: string;
  children?: null | TestList[];
}
