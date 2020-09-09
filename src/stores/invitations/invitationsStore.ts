import { Action, action } from 'easy-peasy';

type Error = {
  fetchingInvitations: boolean;
};

export interface InvitationsModel {
  error: Error;
  loading: boolean;

  setLoading: Action<InvitationsModel, boolean>;
  setError: Action<InvitationsModel, Error>;
}

const storeModel: InvitationsModel = {
  error: {
    fetchingInvitations: false,
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
