import { combineReducers } from 'redux';

import appState from './AppReducers';

const state = combineReducers({
  app: appState,
});

export default state;
