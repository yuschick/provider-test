import { createStore } from 'easy-peasy';
import { storeModel } from './model';

const store = createStore(storeModel, {
  injections: {},
});

export default store;
