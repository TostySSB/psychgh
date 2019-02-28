import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import './App.css';
import Routes from './Routes';
class App extends Component {
  constructor(props) {
    super(props);
    //this.state = {list: []};
  }
  //This is how you access our electron server
  /*getList = () => {
    fetch('/api/getList')
    .then(res => res.json())
    .then(list => this.setState({ list }))
  }*/
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
      </div>
    );
  }
}

export default App;