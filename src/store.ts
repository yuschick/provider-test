import { createTypedHooks } from 'easy-peasy';

import globalModel, { GlobalModel } from './stores/global/store';
import groupsModel, { GroupsModel } from './stores/groups/store';

export interface StoreModel extends GlobalModel {
  groups: GroupsModel;
}

export const storeModel: StoreModel = {
  ...globalModel,
  groups: groupsModel,
};

const typedHooks = createTypedHooks<StoreModel>();
export const usePositiveActions = typedHooks.useStoreActions;
export const usePositiveStore = typedHooks.useStoreState;
