import { Action, action } from 'easy-peasy';

import { Targets } from '../../types/global';

export interface GlobalModel {
  target: Targets | undefined;

  setTarget: Action<GlobalModel, Targets>;
}

const storeModel: GlobalModel = {
  target: undefined,

  setTarget: action((state, payload) => {
    state.target = payload;
  }),
};

export default storeModel;
