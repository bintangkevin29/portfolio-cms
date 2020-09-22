import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { selectUser } from "../../redux/user/user.selector";

interface Props extends RouteProps {
  component: React.FC;
}

const ProtectedRoute: React.FC<Props> = ({ component: Component, ...props }) => {
  const user = useSelector(selectUser);
  return <Route {...props} render={() => (user ? <Component /> : <Redirect to="/login" />)} />;
};

export default ProtectedRoute;
