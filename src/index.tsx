import React, { useEffect } from 'react';
import { createStore, StoreProvider } from 'easy-peasy';

import { storeModel } from './context/model';
import { usePositiveStore, usePositiveActions } from './context/hooks';

import { Targets, Languages } from './types/global';

interface Props {
  target: Targets;
  language: Languages;
}

const PositiveProvider: React.FC<Props> = ({ target, language, children }) => {
  const store = createStore(
    { ...storeModel, target, language },
    {
      injections: {},
    }
  );

  return <StoreProvider store={store}>{children}</StoreProvider>;
};

export { usePositiveStore, usePositiveActions };
export default PositiveProvider;
