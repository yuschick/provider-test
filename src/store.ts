import { createTypedHooks } from 'easy-peasy';

import globalModel, { GlobalModel } from './stores/global/store';
import audienceModel, { AudiencesModel } from './stores/audiences/store';
import exerciseModel, { ExercisesModel } from './stores/exercises/store';
import groupsModel, { GroupsModel } from './stores/groups/store';
import invitationsModel, { InvitationsModel } from './stores/invitations/store';
import membershipsModel, { MembershipsModel } from './stores/memberships/store';
import momentsModel, { MomentsModel } from './stores/moments/store';
import strengthsModel, { StrengthsModel } from './stores/strengths/store';
import usersModel, { UsersModel } from './stores/users/store';

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
