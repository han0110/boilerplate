// @flow

import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import reducer from './reducer';

const rootReducer = combineReducers({
  reducer,
  router,
});

export default rootReducer;
