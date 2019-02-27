import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import GitHubCard from '../cards/GitHub'
const styles = theme => ({
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing.unit * 2,
    },
  });
class HomePageGrid extends Component{
    render(){
        return(
            <div className="HomeGrid">
                <Grid container className={"mainGrid"} spacing={16} justify="center">
                    <Grid item xs={4}>
                        <GitHubCard></GitHubCard>
                    </Grid>
                    <Grid item xs={5}>
                        <CardContent>
                            <Paper>
                                its lit
                            </Paper>
                        </CardContent>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
export default withStyles(styles)(HomePageGrid);