import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Views/Home';
import DiagnosisChart from './Views/DiagnosisChart'
import {BrowserRouter, Route} from 'react-router-dom';
import Docs from './Views/docs';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      //BrowserRouter is how this app handles page routing, this checks what the path variable is and renders the appropriate component
      <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Route exact={true} path='/' render={() => (
            <div className="App">
               <Home />
            </div>
         )}/>
          <Route exact={true} path='/docs' render={() => (
            <div className="App">
              <Docs />
            </div>
         )}/>
          <Route exact={true} path='/DiagnosisChart' render={() => (
              <DiagnosisChart />
            )} />
        </header>
        </BrowserRouter>
      </div>
      
    );
  }
}

export default App;
