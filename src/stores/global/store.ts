import { Action, action } from 'easy-peasy';

import { Targets, Languages } from 'types/global';

export interface GlobalModel {
  target: Targets | undefined;
  language: Languages | undefined;

  setTarget: Action<GlobalModel, Targets>;
  setLanguages: Action<GlobalModel, Languages>;
}

const storeModel: GlobalModel = {
  target: undefined,
  language: undefined,

  setTarget: action((state, payload) => {
    state.target = payload;
  }),

  setLanguages: action((state, payload) => {
    state.language = payload;
  }),
};
export default storeModel;
