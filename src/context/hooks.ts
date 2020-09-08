import { createTypedHooks } from 'easy-peasy';

import { StoreModel } from './model';

const typedHooks = createTypedHooks<StoreModel>();

export const usePositiveActions = typedHooks.useStoreActions;
export const usePositiveStore = typedHooks.useStoreState;
