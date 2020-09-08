import { Action, action } from 'easy-peasy';

type Error = {
  fetchingMoments: boolean;
};

export interface MomentsModel {
  error: Error;
  loading: boolean;

  setLoading: Action<MomentsModel, boolean>;
  setError: Action<MomentsModel, Error>;
}

const storeModel: MomentsModel = {
  error: {
    fetchingMoments: false,
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
