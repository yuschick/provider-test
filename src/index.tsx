import React from 'react';
import { StoreProvider } from 'easy-peasy';

import store from 'store';

const PositiveProvider: React.FC = ({ children }) => (
  <StoreProvider store={store}>{children}</StoreProvider>
);

export default PositiveProvider;
