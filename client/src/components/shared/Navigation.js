import React from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';
import { LinkContainer } from "react-router-bootstrap";
import { IndexLinkContainer } from 'react-router-bootstrap'
import { Nav, Navbar, NavItem } from "react-bootstrap";

export default withAuth(
  class Navigation extends React.Component {
    constructor(props) {
      super(props);
      this.state = { authenticated: null };
      this.checkAuthentication = this.checkAuthentication.bind(this);
      this.checkAuthentication();
    }

    async checkAuthentication() {
      const authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
      }
    }

    componentDidUpdate() {
      this.checkAuthentication();
    }

    render() {
      return (
        <div>
        {this.state.authenticated ? (
          <div className="auth-nav">
            <Navbar fluid collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">Psych432</Link>
              </Navbar.Brand>
              <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
              <LinkContainer to="/DiagnosisChart">
                <NavItem>DiagnosisChart</NavItem>
              </LinkContainer>
              <LinkContainer to="/profile">
                <NavItem>Profile</NavItem>
              </LinkContainer>
              <LinkContainer to="#" onClick={() => this.props.auth.logout()}>
                <NavItem>Logout</NavItem>
              </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          </div>
        ) : (
          <div className="auth-nav">
            <Navbar fluid collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">Psych432</Link>
              </Navbar.Brand>
              <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
              <LinkContainer to="/login" onClick={() => this.props.auth.login()}>
                <NavItem>Login</NavItem>
              </LinkContainer>
              <LinkContainer to="/register">
                <NavItem>Register</NavItem>
              </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          </div>
        )}
        </div>
        
      );
    }
  }
);