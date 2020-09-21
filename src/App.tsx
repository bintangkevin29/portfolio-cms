import React from "react";
import { Route, Switch } from "react-router-dom";

import "./app.scss";
import MainLayout from "./components/main-layouts";
import { mainModules } from "./constants/modules";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path={mainModules.map((module) => module.url)}>
          <MainLayout>
            {mainModules.map((module, i) => {
              const Component = module.component;
              return <Route key={i} component={Component} path={module.url}></Route>;
            })}
          </MainLayout>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
