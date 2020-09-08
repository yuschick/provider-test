import { createStore } from 'easy-peasy';
import { usePositiveStore, usePositiveActions } from './hooks';
import { storeModel } from './model';

const store = createStore(storeModel, {
  injections: {},
});

export { usePositiveStore, usePositiveActions };
export default store;
