import { Action, action } from 'easy-peasy';

type Error = {
  fetchingMemberships: boolean;
};

export interface MembershipsModel {
  error: Error;
  loading: boolean;

  setLoading: Action<MembershipsModel, boolean>;
  setError: Action<MembershipsModel, Error>;
}

const storeModel: MembershipsModel = {
  error: {
    fetchingMemberships: false,
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
