import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import DummyCard from '../cards/DummyCard';
const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
  });
class HomePageGrid extends Component{
    render(){
        const { classes } = this.props;
        return(
            <div className={classes.root}>
            <Grid container spacing={14} justify='space-evenly'>
                <Grid item>
                    <DummyCard/>
                </Grid>
                <Grid item>
                    <DummyCard/>
                </Grid>
            </Grid>
            </div>
        );
    }
}
export default withStyles(styles)(HomePageGrid);