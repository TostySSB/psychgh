import React, { Component } from "react";
import axios from "axios"
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
  });
  
class userList extends Component {
    constructor(){
        super();
        this.state = {
            userMap: []
        }
    }
    componentDidMount(){
        axios.get('/api/users/userList')
            .then(response => {
                this.setState({userMap: response.data})
            })
            .catch(function(error){
                console.log(error)
            })
    }
    render() {
        const { classes } = this.props;
        let users = this.state.userMap;
        return (
            <div className="App">
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Last Name</TableCell>
                            <TableCell align="right">First Name</TableCell>
                            <TableCell align="right">Practitioner</TableCell>
                            <TableCell align="right">Last Visit</TableCell>
                            <TableCell align="right">Notes</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.state.userMap.map(user => (
                        <TableRow key={user.id}>
                        <TableCell align="right">{user.lastName}</TableCell>
                        <TableCell align="right">{user.firstName}</TableCell>
                        <TableCell align="right">{user.pfirstName} {user.plastName}</TableCell>
                        <TableCell align="right">Last Visit Placeholder</TableCell>
                        <TableCell align="right">Notes Placeholder</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </Paper>
            </div>
        )
    }
}

userList.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(userList);