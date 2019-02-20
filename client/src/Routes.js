import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Views/Home";
import DiagnosisChart from "./Views/DiagnosisChart";
import NotFound from "./Views/NotFound";
import docs from "./Views/docs";
import Login from "./Views/Login";
import Signup from "./Views/Signup";

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/DiagnosisChart" exact component={DiagnosisChart} />
    <Route path="/signup" exact component={Signup} />
    <Route path="/login" exact component={Login} />
    <Route path="/docs" exact component={docs} />
    <Route component={NotFound} />
  </Switch>;