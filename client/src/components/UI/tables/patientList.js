import React, { Component } from "react";
import axios from "axios";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MUIDataTable from "mui-datatables";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import PatientDialog from "../dialogs/PatientDialog";
import { runInThisContext } from "vm";
const columns = [
    {
        name: "user_id",
        label: "User ID",
        options: {
         filter: false,
         sort: false,
        }
       },
    {
        name: "lastName",
        label: "Last Name",
        options: {
         filter: false,
         sort: false,
        }
       },
       {
        name: "firstName",
        label: "First Name",
        options: {
         filter: false,
         sort: false,
        }
       },
       {
        name: "email",
        label: "Email",
        options: {
         filter: false,
         sort: false,
        }
       },
       {
        name: "plastName",
        label: "Practitioner",
        options: {
         filter: false,
         sort: false,
        }
       },
];

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
            users:[],
            userID: Number,
            open:false
        }
    }
    
    handleClickOpen = () => {
        this.setState({ open: true });
    };
    handleClose = () => {
        this.setState({ userID: Number},() => {
            this.setState({open: false})
        });
        console.log(this.state.open)
      };
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
        const options = {
            filterType: 'checkbox',
            selectableRows: false,
            print: false,
            download: false,
            filter: false,
            expandableRows: false,
            onRowClick: (rowData) => {
                this.setState({userID: rowData[0]}, () => {
                    this.setState({open: true})
                })
                console.log("lit")
                console.log(this.state.open)
              },
          };
        const { classes } = this.props;
        return (
            <div className="App">
                <MUIDataTable
                    title={"Patients"}
                    data={this.state.userMap}
                    columns={columns}
                    options={options}
                />
                <PatientDialog userID={this.state.userID} open={this.state.open} handleClose={this.handleClose}/>
            </div>
        )
    }
}

userList.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(userList);