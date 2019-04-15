import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
const styles = theme => ({
    root: {
      flexGrow: 1,
    },
  });
class MyResults extends Component{
    state = {
        user: [],
      };
    componentWillMount(){
        const { user } = this.props.auth;
        axios.get('/api/users/getUser', {
            params: {
                email: user.email
            }
        })
        .then(response => {
            this.setState({user: response.data})
        })
        .catch(function(error){
            console.log(error)
        })
    }
    render(){
        return(
            <div>
            <div style={{ paddingTop: "10%", paddingBottom: "10%" }} className="container valign-wrapper" ></div>
            <Grid container spacing={14}  justify='space-evenly' style={{ minHeight: '100vh' }}>
                <Grid item>
                <Card>
                    <CardContent align='center'>
                        <Typography gutterBottom variant="h4" component="h2" align='center'>
                            <h2>PHQ9 Depression Test Results</h2>
                            {this.state.user.phq9Results}
                        </Typography>
                    </CardContent>
                </Card>
                </Grid>
            </Grid>
            </div>
        );
    }
}
MyResults.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps
  )(MyResults);
  