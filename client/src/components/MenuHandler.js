import React, { Component } from "react";
import { connect } from "react-redux";
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';

class MenuHandler extends Component {
  constructor() {
    super();
    this.state = {
      errors: {}
    };
  }
  render(){

  
    if (this.props.auth.isAuthenticated){
      return(
        <div>
            <Link to="/dashboard" style={{ textDecoration: 'none', display: 'block' }}>
                <MenuItem>My account</MenuItem>
            </Link>
            <Link to="/DiagnosisExploration" style={{ textDecoration: 'none', display: 'block' }}>
                <MenuItem>View Patients</MenuItem>
            </Link>
        </div> 
      )
    }else{
      return(
        <div>
           <Link to="/login" style={{ textDecoration: 'none', display: 'block' }}>
                <MenuItem>Login</MenuItem>
            </Link>                  
            <Link to="/register" style={{ textDecoration: 'none', display: 'block' }}>
                <MenuItem>Register</MenuItem>
            </Link> 
        </div>   
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
)(MenuHandler);