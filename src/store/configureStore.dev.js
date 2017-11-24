import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createHashHistory } from 'history';
import { routerMiddleware, routerActions } from 'react-router-redux';
import rootReducer from '../reducers';

const history = createHashHistory();

const configureStore = () => {
  const middlewares = [];
  const enhancers = [];

  // Thunk Middleware
  middlewares.push(thunk);

  // Router Middleware
  const router = routerMiddleware(history);
  middlewares.push(router);

  // Redux DevTools Configuration
  const actionCreators = {
    ...routerActions,
  };

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      actionCreators,
    })
    : compose;

  enhancers.push(applyMiddleware(...middlewares));
  const enhancer = composeEnhancers(...enhancers);

  const store = createStore(rootReducer, enhancer);

  return store;
};

export default { history, configureStore };
