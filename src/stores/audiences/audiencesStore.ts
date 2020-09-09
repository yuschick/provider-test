import { Action, action, Thunk, thunk } from 'easy-peasy';

type Error = {
  fetchingAudiences: boolean;
};

export interface AudiencesModel {
  error: Error;
  loading: boolean;

  audiences: any[];

  setLoading: Action<AudiencesModel, boolean>;
  setError: Action<AudiencesModel, Error>;
  setAudiences: Action<AudiencesModel, any[]>;

  fetchAudiences: Thunk<AudiencesModel>;
}

const storeModel: AudiencesModel = {
  error: {
    fetchingAudiences: false,
  },
  loading: false,
  audiences: [],

  setError: action((state, payload) => {
    state.error = payload;
  }),

  setLoading: action((state, payload) => {
    state.loading = payload;
  }),

  setAudiences: action((state, payload) => {
    state.audiences = payload;
  }),

  fetchAudiences: thunk(async () => {
    console.log('womp womp');
  }),
};

export default storeModel;
