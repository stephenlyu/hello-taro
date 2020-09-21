import { Effect, Reducer } from 'src/types/dva';

function delay(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export interface CountModelType {
  namespace: 'count';
  state: number;
  effects: {
    asyncAdd: Effect;
  };
  reducers: {
    add: Reducer<number>;
    sub: Reducer<number>;
  };
}

const CountModel: CountModelType = {
  namespace: 'count',
  state: 0,

  effects: {
    *asyncAdd(_, effects) {
      const { put } = effects;
      yield delay(2000);
      yield put({ type: 'add' });
    },
  },

  reducers: {
    add(state) {
      const count = state ? state : 0;
      return count + 1;
    },
    sub(state) {
      const count = state ? state : 0;
      return count! - 1;
    },
  },
};

export default CountModel;
