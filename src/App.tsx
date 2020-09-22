import React from "react";
import { Route, Switch } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";

import MainLayout from "./components/main-layouts";
import { combinedModules } from "./constants/modules";

import "react-toastify/dist/ReactToastify.css";
import "./app.scss";

function App() {
  const allModules = combinedModules();

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
        <Route exact path={allModules.map((module) => module.url)}>
          <MainLayout>
            {allModules.map((module, i) => {
              const Component = module.component;
              return <Route exact key={i} component={Component} path={module.url}></Route>;
            })}
          </MainLayout>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
