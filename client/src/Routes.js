import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Views/Home";
import DiagnosisChart from "./Views/DiagnosisChart";
import NotFound from "./Views/NotFound";
import docs from "./Views/docs";


export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/DiagnosisChart" exact component={DiagnosisChart} />
    <Route path="/Docs" exact component={docs} />
    <Route component={NotFound} />
  </Switch>;