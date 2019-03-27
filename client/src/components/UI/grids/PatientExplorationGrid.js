import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import UserList from '../tables/userList';
const styles = theme => ({
    root: {
      flexGrow: 1,
      width: '75%'
    },
  });
class PatientExplorationGrid extends Component{
    render(){
        const { classes } = this.props;
        return(
            <div style={{ paddingTop: "10%" }} className="container valign-wrapper" >
                <div className={classes.root}>
                    <UserList/>
                </div>
            </div>
        );
    }
}
export default withStyles(styles)(PatientExplorationGrid);