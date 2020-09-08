import { Action, action } from 'easy-peasy';

type Error = {
  fetchingExercises: boolean;
};

export interface ExercisesModel {
  error: Error;
  loading: boolean;

  setLoading: Action<ExercisesModel, boolean>;
  setError: Action<ExercisesModel, Error>;
}

const storeModel: ExercisesModel = {
  error: {
    fetchingExercises: false,
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
