import React from 'react';
import { Provider } from 'react-redux';
import store from '../../src/store/store';


export function renderWithStore(ui: React.ReactElement) {
  return <Provider store={store}>{ui}</Provider>;
}
