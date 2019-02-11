import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Views/Home";
import NotFound from "./Views/NotFound";

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route component={NotFound} />
  </Switch>;