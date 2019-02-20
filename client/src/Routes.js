import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Views/Home";
import NotFound from "./Views/NotFound";
import docs from "./Views/docs";
import Login from "./Views/Login";
import Signup from "./Views/Signup";

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/signup" exact component={Signup} />
    <Route path="/docs" exact component={docs} />
    <Route component={NotFound} />
  </Switch>;