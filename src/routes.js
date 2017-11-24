import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './containers/App';
import HomePage from './containers/HomePage';

const Routes = () => (
  <App>
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  </App>
);

export default Routes;
