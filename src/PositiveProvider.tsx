import React from 'react';
import { createStore, StoreProvider } from 'easy-peasy';

import { storeModel } from './store';
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

export default PositiveProvider;
