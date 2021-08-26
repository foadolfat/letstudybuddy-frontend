import React from "react";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const user = JSON.parse(localStorage.getItem("user"));
  
  return (
      
    <Route
      {...restOfProps}
      render={(props) =>
        user && user.accessToken ? <Component {...props} /> : <Redirect to="/Auth" />
      }
    />
    
  );
}

export default ProtectedRoute;