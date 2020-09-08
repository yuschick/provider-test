import React from 'react';
import { StoreProvider } from 'easy-peasy';

import store from 'store';
import { usePositiveStore, usePositiveActions } from 'store/hooks';

const PositiveProvider: React.FC = ({ children }) => (
  <StoreProvider store={store}>{children}</StoreProvider>
);

export { usePositiveStore, usePositiveActions };
export default PositiveProvider;
