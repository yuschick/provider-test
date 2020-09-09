import { Action, action } from 'easy-peasy';

type Error = {
  fetchingUsers: boolean;
};

export interface UsersModel {
  error: Error;
  loading: boolean;

  setLoading: Action<UsersModel, boolean>;
  setError: Action<UsersModel, Error>;
}

const storeModel: UsersModel = {
  error: {
    fetchingUsers: false,
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
