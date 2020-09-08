import groupsModel, { GroupsModel } from '../groups/groupStore';

export interface StoreModel {
  groups: GroupsModel;
}

export const storeModel: StoreModel = {
  groups: groupsModel,
};
