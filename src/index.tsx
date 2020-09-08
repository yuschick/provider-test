import React, { useEffect } from 'react';
import { createStore, StoreProvider } from 'easy-peasy';

import { storeModel } from './context/model';
import { usePositiveStore, usePositiveActions } from './context/hooks';

import { Targets } from './types/global';

interface Props {
  target: Targets;
}

const PositiveProvider: React.FC<Props> = ({ target, children }) => {
  let store,
    enhancedStoreModel = storeModel;

  useEffect(() => {
    if (!target) return;

    enhancedStoreModel.target = target;
  }, [target]);

  store = createStore(enhancedStoreModel, {
    injections: {},
  });

  return <StoreProvider store={store}>{children}</StoreProvider>;
};

export { usePositiveStore, usePositiveActions };
export default PositiveProvider;
