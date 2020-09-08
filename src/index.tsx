import React, { useEffect } from 'react';
import { createStore, StoreProvider } from 'easy-peasy';

import { storeModel } from './context/model';
import { usePositiveStore, usePositiveActions } from './context/hooks';

import { Targets } from './types/global';

interface Props {
  target: Targets;
}

const PositiveProvider: React.FC<Props> = ({ target, children }) => {
  console.log('HEY---', target);
  let store;

  useEffect(() => {
    if (!target) return;

    storeModel.target = target;
  }, [target]);

  store = createStore(storeModel, {
    injections: {},
  });

  return <StoreProvider store={store}>{children}</StoreProvider>;
};

export { usePositiveStore, usePositiveActions };
export default PositiveProvider;
