import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import GitHubCard from '../cards/GitHub';
import ReadDocsCard from '../cards/readDocs';
const styles = theme => ({
    root: {
      flexGrow: 1,
    },
  });
class HomePageGrid extends Component{
    render(){
        const { classes } = this.props;
        return(
            <div className={classes.root}>
            <Grid container spacing={14}  justify='space-evenly' style={{ minHeight: '100vh' }}>
                <Grid item>
                    <GitHubCard/>
                </Grid>
                <Grid item>
                    <ReadDocsCard/>
                </Grid>
            </Grid>
            </div>
        );
    }
}
export default withStyles(styles)(HomePageGrid);