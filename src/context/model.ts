import globalModel, { GlobalModel } from '../stores/global/store';
import groupsModel, { GroupsModel } from '../stores/groups/store';

export interface StoreModel extends GlobalModel {
  groups: GroupsModel;
}

export const storeModel: StoreModel = {
  ...globalModel,
  groups: groupsModel,
};
