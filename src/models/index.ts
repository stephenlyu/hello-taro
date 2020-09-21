import count from '../pages/counter/model';

export interface Loading {
  global: boolean;
  effects: { [key: string]: boolean | undefined };
  models: {
    count?: boolean;
  };
}

export interface ConnectState {
  loading: Loading;
  count: number;
}

export default [count];
