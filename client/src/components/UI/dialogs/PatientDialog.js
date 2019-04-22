import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from "axios";
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
 class PatientDialog extends Component {
  state = {
    open: true,
    user: [],
    q10: 0,
  };
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  componentWillMount(){
    axios.get('/api/users/singleUser', {
        params: {
            userID: this.props.userID
        }
    })
    .then(response => {
        this.setState({user: response.data})
    })
    .catch(function(error){
        console.log(error)
    })
    axios.get('/api/users/userPHQ9', {
        params: {
            userID: this.props.userID
        }
    })
    .then(response => {
        this.setState({q10: response.data})
    })
    .catch(function(error){
        console.log(error)
    })
  }
  handleClaim(){
    const {user} = this.props.auth;
    axios.post("/api/users/claim", {email: this.state.user.email, firstName: user.name, lastName: user.lastName});
  }
  genButton(){
    const {user} = this.props.auth;
    if (user.isPractitioner){
        return(
            <Button onClick={this.handleClaim()} color="primary" size='medium'><h5>Claim Patient</h5></Button>
        )
    }
  }
  render() {
    return (
      <div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          fullWidth
          maxWidth='md'
        >
          <DialogTitle id="form-dialog-title"><h4>Patient Info</h4></DialogTitle>
          <DialogContent>
          <Grid container spacing={40} justify='space-evenly' direction='column' alignItems='center'>
                    <Grid item>
                        <h5>
                            <b>
                                User ID:{"  "}
                            </b>
                             {this.state.user.user_id}
                        </h5>
                    </Grid>
                    <Grid item>
                        <h5>
                            <b>
                                Name:{"  "}
                            </b>
                             {this.state.user.firstName} {this.state.user.lastName}
                        </h5>
                    </Grid>
                    <Grid item>
                        <h5>
                            <b>
                                Practitioner:{"  "}
                            </b>
                             {this.state.user.pfirstName} {this.state.user.plastName}
                        </h5>
                    </Grid>
                    <Grid item>
                    </Grid>
                    <Grid item>
                        <h5>
                            <b>
                                PHQ9 Test Results:{"  "}
                            </b>
                             {this.state.user.phq9Results}
                        </h5>
                    </Grid>
                </Grid>
            {/* <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            /> */}
          </DialogContent>
          {this.genButton()}
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
PatientDialog.propTypes = {
    classes: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
};
  
const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps
)(PatientDialog);