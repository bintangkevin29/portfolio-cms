import React, { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";

import MainLayout from "./components/main-layouts";
import { combinedModules } from "./constants/modules";

import "react-toastify/dist/ReactToastify.css";
import "./app.scss";
import LoginPage from "./pages/login-page";
import ProtectedRoute from "./components/protected-route";
import { firebaseAuth } from "./lib/firestore";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/user/user.action";

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  
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
