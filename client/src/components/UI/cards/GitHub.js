import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
const styles = ({
    card: {
        maxWidth: 500,
        minWidth: 350,
      },
      media: {
        height: 140,
        objectFit: 'cover',
      },
      
  });
function GitHubCard (props) {
    const { classes } = props;
    return(
        <Card className={classes.card}>
            <CardMedia className={classes.media} image ={require('../../../resources/images/cards/GHLogo.png')} title="GitHub Logo"/>
            <CardContent>
                <Typography gutterBottom variant="h4" component="h2" align='center'>
                    This is an open source project developed by Troy Oster, Henry Soule, and George Engel.
                    Psychgh is hosted on GitHub. Click below to view the source code for this project.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="large" color="primary" fullWidth="true" href="https://github.com/TostySSB/psychgh">
                    <Typography variant="h5" component="h2" align='center' color="primary">
                        Learn More
                    </Typography>
                </Button>
            </CardActions>
        </Card>
    );
}
export default withStyles(styles)(GitHubCard);