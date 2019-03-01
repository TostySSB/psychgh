import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { SecureRoute, ImplicitCallback } from '@okta/okta-react';
import DiagnosisChart from './Views/DiagnosisChart';
import DiagnosisGrid from './components/UI/grids/DiagnosisGrid';
import Navigation from './components/shared/Navigation';
import HomePage from './Views/Home';
import RegistrationForm from './components/auth/RegistrationForm';
import config from './app.config';
import LoginPage from './components/auth/LoginPage';
import ProfilePage from './components/auth/ProfilePage'
import docs from "./Views/docs";
import './App.css';


export default class App extends Component {
  constructor(){
    super();
    this.state ={users: []};
  }
  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"></link>
        <Navigation />
        <main>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" render={() => <LoginPage baseUrl={config.url} />}
          />
          <Route path="/implicit/callback" component={ImplicitCallback} />
          <Route path="/register" component={RegistrationForm} />
          <Route path="/Docs" exact component={docs} />
          <SecureRoute path="/DiagnosisChart" exact component={DiagnosisChart} />
          <SecureRoute path="/DiagnosisExploration" exact component={DiagnosisGrid} />
          <SecureRoute path="/profile" component={ProfilePage} />
        </main>
      </div>
    );
  }
}