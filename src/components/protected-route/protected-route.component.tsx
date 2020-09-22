import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

interface Props extends RouteProps {
  component: React.FC;
}

const ProtectedRoute: React.FC<Props> = ({ component: Component, ...props }) => {
  const user = null;
  return <Route {...props} render={() => (user ? <Component /> : <Redirect to="/login" />)} />;
};

export default ProtectedRoute;
