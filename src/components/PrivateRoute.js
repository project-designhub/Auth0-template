import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import Auth from '../containers/auth-zero/Auth/Auth';

const auth = new Auth();

const PrivateRoute = ({ component: Component, ...rest }) => {
  useEffect(() => {
    const fn = async () => {
      if (!auth.isAuthenticated()) {
        auth.login();
      }
    };
    fn();
  }, []);

  const render = props => <Component {...props} />;

  return <Route render={render} {...rest} />;
};

export default PrivateRoute;
