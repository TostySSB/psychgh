import React from 'react';
import OktaAuth from '@okta/okta-auth-js';
import { withAuth } from '@okta/okta-react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../../Views/Login.css";
export default withAuth(
  class LoginForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        sessionToken: null,
        error: null,
        username: '',
        password: ''
      };

      this.oktaAuth = new OktaAuth({ url: props.baseUrl });

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleUsernameChange = this.handleUsernameChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleSubmit(e) {
      e.preventDefault();
      this.oktaAuth
        .signIn({
          username: this.state.username,
          password: this.state.password
        })
        .then(res =>
          this.setState({
            sessionToken: res.sessionToken
          })
        )
        .catch(err => {
          this.setState({ error: err.message });
          console.log(err.statusCode + ' error', err);
        });
    }

    handleUsernameChange(e) {
      this.setState({ username: e.target.value });
    }

    handlePasswordChange(e) {
      this.setState({ password: e.target.value });
    }

    render() {
      if (this.state.sessionToken) {
        this.props.auth.redirect({ sessionToken: this.state.sessionToken });
        return null;
      }

      const errorMessage = this.state.error ? (
        <span className="error-message">{this.state.error}</span>
      ) : null;

      return (
        <div className="Login">
          <form onSubmit={this.handleSubmit}>
            {errorMessage}
            <FormGroup controlId="username" bsSize="large">
              <ControlLabel>Email:</ControlLabel>
              <FormControl
                id="username"
                type="text"
                value={this.state.username}
                onChange={this.handleUsernameChange}
              />
            </FormGroup>

            <FormGroup controlId="password" bsSize="large">
              <ControlLabel>Password:</ControlLabel>
              <FormControl
                id="password"
                type="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
            </FormGroup>
            <Button
            block
            bsSize="large"
            type="submit"
            >
            Login
            </Button>
          </form>
        </div>
      );
    }
  }
);