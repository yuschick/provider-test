import globalModel, { GlobalModel } from '../global/store';
import groupsModel, { GroupsModel } from '../groups/store';

export interface StoreModel extends GlobalModel {
  groups: GroupsModel;
}

export const storeModel: StoreModel = {
  ...globalModel,
  groups: groupsModel,
};
