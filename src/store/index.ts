import models from '../models';
import dva from './dva';

export default function configStore() {
  const dvaApp = dva.createApp({
    initialState: {},
    models: models,
  });
  return dvaApp.getStore();
}
