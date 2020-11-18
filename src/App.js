import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Navigation from './page/Navigation';
import Login from './page/Login';
import Logout from './page/Logout';
import Admin from './page/Admin';
import Home from './page/Home';

const App = () => {
  return (
    <div>
      <h1>Simulasi Login Prequel</h1>
      <hr />
      <Navigation />

      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default withRouter(App);
