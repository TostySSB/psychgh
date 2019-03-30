import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PHQ9 from "./Views/PHQ9";

import PrivateRoute from "./components/private-route/PrivateRoute";
import PractitionerRoute from "./components/private-route/PractitionerRoute";
import Dashboard from "./components/dashboard/Dashboard";
import DiagnosisChart from './Views/DiagnosisChart';
import DiagnosisGrid from './components/UI/grids/DiagnosisGrid';
import PatientExploration from './Views/PatientExploration';
import PatientEvaluation from './Views/Patient_evaluation';
import DepressionChart from './Views/DepressionChart';

import DepressionChart2 from './Views/Depression/DepressionChart2';
import DepressionChart3a from './Views/Depression/DepressionChart3a';
import DepressionChart3b from './Views/Depression/DepressionChart3b';
import DepressionChart3c from './Views/Depression/DepressionChart3c';
import DepressionChart4a from './Views/Depression/DepressionChart4a';
import DepressionChart4b from './Views/Depression/DepressionChart4b';
import DepressionChart5a from './Views/Depression/DepressionChart5a';
import DepressionChart5b from './Views/Depression/DepressionChart5b';
import DepressionChart5c from './Views/Depression/DepressionChart5c';
import DepressionChart6a from './Views/Depression/DepressionChart6a';
import DepressionChart6b from './Views/Depression/DepressionChart6b';
import DepressionChart6c from './Views/Depression/DepressionChart6c';

import "./App.css";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/evaluation" component={PatientEvaluation} />
            
            <Route exact path="/test" component={Eval_Maker} />
            <Route exact path="/test2" component={DepressionChart} />
            <Route exact path="/patient_evaluation2" component={DepressionChart2} />
            <Route exact path="/patient_evaluation3a" component={DepressionChart3a} />
            <Route exact path="/patient_evaluation3b" component={DepressionChart3b} />
            <Route exact path="/patient_evaluation3c" component={DepressionChart3c} />
            <Route exact path="/patient_evaluation4a" component={DepressionChart4a} />
            <Route exact path="/patient_evaluation4b" component={DepressionChart4b} />
            <Route exact path="/patient_evaluation5a" component={DepressionChart5a} />
            <Route exact path="/patient_evaluation5b" component={DepressionChart5b} />
            <Route exact path="/patient_evaluation5c" component={DepressionChart5c} />
            <Route exact path="/patient_evaluation6a" component={DepressionChart6a} />
            <Route exact path="/patient_evaluation6b" component={DepressionChart6b} />
            <Route exact path="/patient_evaluation6c" component={DepressionChart6c} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/DiagnosisExploration" component={DiagnosisGrid} />
              <PrivateRoute exact path="/DiagnosisChart" component={DiagnosisChart} />
              <PractitionerRoute exact path="/Patients" component={PatientExploration} />
              <PractitionerRoute exact path="/PHQ9" component={PHQ9} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
