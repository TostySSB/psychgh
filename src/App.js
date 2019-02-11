import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import './App.css';
import Home from './Views/Home';
import {BrowserRouter, Route} from 'react-router-dom';
import Docs from './Views/docs';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      //BrowserRouter is how this app handles page routing, this checks what the path variable is and renders the appropriate component
      <div className="App">

      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Psych432</Link>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to="/signup">
              <NavItem>Signup</NavItem>
            </LinkContainer>
            <LinkContainer to="/login">
              <NavItem>Login</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />

      <BrowserRouter>
        <header className="App-header">
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
