import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import DummyCard from '../cards/DummyCard';
import DiagnosisCard from '../cards/DiagnosisCard';
import UserList from '../../userList';
const styles = theme => ({
    root: {
      flexGrow: 1,
    },
  });
class DiagnosisGrid extends Component{
    render(){
        const { classes } = this.props;
        return(
            <div style={{ paddingTop: "10%" }} className="container valign-wrapper" >
                <div className={classes.root}>
                <Grid container spacing={40} justify='space-evenly' style={{ minHeight: '100vh' }}>
                    <Grid item>
                        <UserList/>
                        <DiagnosisCard/>

                    </Grid>
                    <Grid item>
                        <DummyCard/>
                    </Grid>
                </Grid>
                </div>
            </div>
        );
    }
}
export default withStyles(styles)(DiagnosisGrid);