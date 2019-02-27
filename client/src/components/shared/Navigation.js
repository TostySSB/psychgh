import React from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';
import { LinkContainer } from "react-router-bootstrap";
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
      if (this.state.authenticated === null) return null;
      const authNav = this.state.authenticated ? (
        <ul className="auth-nav">
          <li>
            <a
              href="javascript:void(0)"
              onClick={() => this.props.auth.logout()}
            >
              Logout
            </a>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      ) : (
        <ul className="auth-nav">
          <li>
            <a
              href="javascript:void(0)"
              onClick={() => this.props.auth.login()}
            >
              Login
            </a>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      );
      return (
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Psych432</Link>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              {authNav}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }
  }
);