import { Action, action } from 'easy-peasy';

type Error = {
  fetchingGroups: boolean;
  addingGroup: boolean;
  editingGroup: boolean;
};

export interface GroupsModel {
  error: Error;
  loading: boolean;

  count: number;

  setLoading: Action<GroupsModel, boolean>;
  setError: Action<GroupsModel, Error>;
  setCount: Action<GroupsModel, number>;
}

const storeModel: GroupsModel = {
  error: {
    fetchingGroups: false,
    addingGroup: false,
    editingGroup: false,
  },
  loading: false,
  count: 10,

  setError: action((state, payload) => {
    state.error = payload;
  }),

  setLoading: action((state, payload) => {
    state.loading = payload;
  }),

  setCount: action((state, payload) => {
    state.count = payload;
  }),
};

export default storeModel;
