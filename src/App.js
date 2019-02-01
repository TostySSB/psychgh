import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Views/Home';
import {BrowserRouter, Route} from 'react-router-dom';
import Docs from './Views/Docs';

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
      
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Route exact={true} path='/' render={() => (
            <div className="App">
              <Home />
            </div>
         )}/>
          <Route exact={true} path='/Docs' render={() => (
            <div className="App">
              <Docs />
            </div>
         )}/>
        </header>
        </BrowserRouter>
      </div>
      
    );
  }
}

export default App;
