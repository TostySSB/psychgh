import React from 'react';
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
function ReadDocsCard (props) {
    const { classes } = props;
    return(
        <Card className={classes.card}>
            <CardMedia className={classes.media} image ={require('../../../resources/images/cards/readDocs.png')} title="ReadTheDocs Logo"/>
            <CardContent>
                <Typography gutterBottom variant="h4" component="h2" align='center'>
                    Want to learn how to use, modify, and edit this project? Whether you are a developer,
                    or simply a user, our documentation can help you. Click the link below to view the documentation
                    for this project.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="large" color="primary" fullWidth="true" href="https://psychgh.readthedocs.io/en/latest/">
                    <Typography variant="h5" component="h2" align='center' color="primary">
                        Learn More
                    </Typography>
                </Button>
            </CardActions>
        </Card>
    );
}
export default withStyles(styles)(ReadDocsCard);