import React, { Component } from "react";
import axios from "axios"
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MUIDataTable from "mui-datatables";

const columns = [
    {
        name: "user_id",
        label: "User ID",
        options: {
         filter: false,
         sort: true,
        }
       },
    {
        name: "lastName",
        label: "Last Name",
        options: {
         filter: false,
         sort: true,
        }
       },
       {
        name: "firstName",
        label: "First Name",
        options: {
         filter: false,
         sort: true,
        }
       },
       {
        name: "email",
        label: "Email",
        options: {
         filter: false,
         sort: true,
        }
       },
];
const options = {
    filterType: 'checkbox',
    selectableRows: false,
    print: false,
    download: false,
    filter: false
  };
const styles = theme => ({
    app: {
        width: '100%'
    }
  });
  
class userList extends Component {
    constructor(){
        super();
        this.state = {
            userMap: [],
            users:[]
        }
    }
    componentDidMount(){
        axios.get('/api/users/userList')
            .then(response => {
                this.setState({userMap: response.data, users: response.data})
            })
            .catch(function(error){
                console.log(error)
            })
    }
    render() {
        const { classes } = this.props;
        return (
            <div className="App">
                <MUIDataTable
                    title={"Patients"}
                    data={this.state.userMap}
                    columns={columns}
                    options={options}
                />
            </div>
        )
    }
}

userList.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(userList);