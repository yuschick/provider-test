import React, { useEffect } from 'react';
import { StoreProvider } from 'easy-peasy';

import store from './store';
import { usePositiveStore, usePositiveActions } from './store/hooks';

import { Targets } from './types/global';

interface Props {
  target: Targets;
}

const PositiveProvider: React.FC<Props> = ({ target, children }) => {
  const { setTarget } = usePositiveActions(actions => actions);

  useEffect(() => {
    if (!target) return;

    setTarget(target);
  }, [target, setTarget]);

  return <StoreProvider store={store}>{children}</StoreProvider>;
};

export { usePositiveStore, usePositiveActions };
export default PositiveProvider;
