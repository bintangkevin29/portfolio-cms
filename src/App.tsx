import React, { useEffect } from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";

import { firebaseAuth } from "./lib/firestore";

import { combinedModules } from "./constants/modules";
import { setUser } from "./redux/user/user.action";

import LoginPage from "./pages/login-page";
import ProtectedRoute from "./components/protected-route";
import MainLayout from "./components/main-layouts";

import "react-toastify/dist/ReactToastify.css";
import "./app.scss";
import { setLastUrl } from "./redux/url-tracker/url-tracker.action";

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(setUser(user));
        history.push("/");
      }
    });
    return unsubscribe;
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firebaseAuth]);

  useEffect(() => {
    dispatch(setLastUrl(location.pathname));
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <div className="app">
      <ToastContainer
        hideProgressBar
        position="bottom-left"
        transition={Slide}
        autoClose={3000}
        toastClassName="shadow rounded px-4"
      />
      <Switch>
        <Route exact path={combinedModules.map((module) => module.url)}>
          <MainLayout>
            {combinedModules.map((module, i) => {
              const Component = module.component;
              return <ProtectedRoute exact key={i} component={Component} path={module.url} />;
            })}
          </MainLayout>
        </Route>
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
