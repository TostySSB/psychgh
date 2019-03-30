import React, { Component } from "react";
import { connect } from "react-redux";
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

class MenuHandler extends Component {
  constructor() {
    super();
    this.state = {
      errors: {}
    };
  }
  render(){
    if (this.props.auth.isAuthenticated && !this.props.auth.isPractitioner){
      return(
        <div>
            <Link to="/dashboard" style={{ textDecoration: 'none', display: 'block' }}>
                <MenuItem>My account</MenuItem>
            </Link>
        </div> 
      )
    }else if (this.props.auth.isPractitioner && this.props.auth.isAuthenticated){
      return(
        <div>
            <Link to="/dashboard" style={{ textDecoration: 'none', display: 'block' }}>
                <MenuItem>My account</MenuItem>
            </Link>
            <Link to="/Patients" style={{ textDecoration: 'none', display: 'block' }}>
                <MenuItem>View Patients</MenuItem>
            </Link>
            <Link to="/PHQ9" style={{ textDecoration: 'none', display: 'block' }}>
                <MenuItem>Administer the PHQ-9</MenuItem>
            </Link>
            <Link to="/DiagnosisChart" style={{ textDecoration: 'none', display: 'block' }}>
                <MenuItem>New Diagnosis Exploration</MenuItem>
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
MenuHandler.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
)(MenuHandler);