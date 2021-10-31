import React from 'react';
import { Route, Redirect } from 'react-router';
import useAuth from './../../../../Hooks/useAuth';


const PrivateRoute = ({ children, ...rest }) => {
     let {user,isLoading } = useAuth();
         if(isLoading){
      return (
        <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
      )
    }
    return (
            <Route
      {...rest}
      render={({ location }) =>
        user.displayName ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;