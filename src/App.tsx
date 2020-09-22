import React from "react";
import { Route, Switch } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";

import MainLayout from "./components/main-layouts";
import { combinedModules } from "./constants/modules";

import "react-toastify/dist/ReactToastify.css";
import "./app.scss";
import LoginPage from "./pages/login-page";

function App() {
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
              return <Route exact key={i} component={Component} path={module.url}></Route>;
            })}
          </MainLayout>
        </Route>
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
