import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Views/Home';
import {BrowserRouter, Route} from 'react-router-dom';
import Docs from './Views/docs';

class App extends Component {
  render() {
    return (
      //BrowserRouter is how this app handles page routing
      <div className="App">
      <BrowserRouter>
      
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          //This checks what the path variable is and renders the appropriate component
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
        </header>
        </BrowserRouter>
      </div>
      
    );
  }
}

export default App;
