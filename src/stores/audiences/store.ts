import { Action, action } from 'easy-peasy';

type Error = {
  fetchingAudiences: boolean;
};

export interface AudiencesModel {
  error: Error;
  loading: boolean;

  setLoading: Action<AudiencesModel, boolean>;
  setError: Action<AudiencesModel, Error>;
}

const storeModel: AudiencesModel = {
  error: {
    fetchingAudiences: false,
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
