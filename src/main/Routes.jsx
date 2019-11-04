import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import NetworkList from '../modules/NetworkList';

const Routes = () => (
  <div className="App">
    <Switch>
      <Redirect exact from="/" to="/networks" />
      <Route path="/networks" component={NetworkList} />
    </Switch>
  </div>
);

export default Routes;
