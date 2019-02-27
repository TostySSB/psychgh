import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
const styles = ({
    card: {
        maxWidth: 345,
      },
      media: {
        height: 140,
      },
  });
function GitHubCard (props) {
    const { classes } = props;
    return(
        <Card className="GitCard">
            <CardMedia className={classes.media} image ={require('../../../resources/images/cards/GHLogo.png')} title="GitHub Logo">
            </CardMedia>
            <CardContent>
            <Typography gutterBottom variant="h2" component="h2">
                Lizard
            </Typography>
            </CardContent>
        </Card>
    );
}
export default withStyles(styles)(GitHubCard);