import { createTypedHooks } from 'easy-peasy';

import globalModel, { GlobalModel } from './stores/global';
import audienceModel, { AudiencesModel } from './stores/audiences';
import exerciseModel, { ExercisesModel } from './stores/exercises';
import groupsModel, { GroupsModel } from './stores/groups';
import invitationsModel, { InvitationsModel } from './stores/invitations';
import membershipsModel, { MembershipsModel } from './stores/memberships';
import momentsModel, { MomentsModel } from './stores/moments';
import strengthsModel, { StrengthsModel } from './stores/strengths';
import usersModel, { UsersModel } from './stores/users';

export interface StoreModel extends GlobalModel {
  audiences: AudiencesModel;
  exercises: ExercisesModel;
  groups: GroupsModel;
  invitations: InvitationsModel;
  memberships: MembershipsModel;
  moments: MomentsModel;
  strengths: StrengthsModel;
  users: UsersModel;
}

export const storeModel: StoreModel = {
  ...globalModel,
  audiences: audienceModel,
  exercises: exerciseModel,
  groups: groupsModel,
  invitations: invitationsModel,
  memberships: membershipsModel,
  moments: momentsModel,
  strengths: strengthsModel,
  users: usersModel,
};

const typedHooks = createTypedHooks<StoreModel>();
export const usePositiveActions = typedHooks.useStoreActions;
export const usePositiveStore = typedHooks.useStoreState;
