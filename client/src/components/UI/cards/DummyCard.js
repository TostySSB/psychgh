import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
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
function DummyCard (props) {
    const { classes } = props;
    return(
        <Card className={classes.card}>
            <CardContent>
                <Typography gutterBottom variant="h4" component="h2" align='center'>
                    This is a "Dummy Patient", features will be added to allow a practitioner to view this patient's diagnosis and treatment "track". In the final release of this app, this card design will be used for each step of the track. This design is meant to help the patient and practitioner more easily understand where they are on the "track".
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="large" color="primary" fullWidth="true">
                    <Typography variant="h5" component="h2" align='center' color="primary">
                        View Chart
                    </Typography>
                </Button>
            </CardActions>
        </Card>
    );
}
export default withStyles(styles)(DummyCard);