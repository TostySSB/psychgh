import React, { Component } from "react";
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitIcon from '@material-ui/icons/ExitToApp';
import { connect } from "react-redux";



export class LoginIcon extends Component {
  constructor() {
    super();
    this.state = {
      errors: {}
    };
  }
  render(){

  
    if (this.props.auth.isAuthenticated){
      return(
        <ExitIcon />
      )
    }else{
      return(
        <AccountCircle />
      )
    }
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
)(LoginIcon);