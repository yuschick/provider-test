import { Action, action } from 'easy-peasy';

type Error = {
  fetchingStrengths: boolean;
};

export interface StrengthsModel {
  error: Error;
  loading: boolean;

  setLoading: Action<StrengthsModel, boolean>;
  setError: Action<StrengthsModel, Error>;
}

const storeModel: StrengthsModel = {
  error: {
    fetchingStrengths: false,
  },
  loading: false,

  setError: action((state, payload) => {
    state.error = payload;
  }),

  setLoading: action((state, payload) => {
    state.loading = payload;
  }),
};

export default storeModel;
