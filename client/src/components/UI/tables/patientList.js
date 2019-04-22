import React, { Component } from "react";
import axios from "axios";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MUIDataTable from "mui-datatables";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import PatientDialog from "../dialogs/PatientDialog";
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
        name: "pLastName",
        label: "Practitioner",
        options: {
         filter: false,
         sort: false,
        }
       },
];
const options = {
    filterType: 'checkbox',
    selectableRows: true,
    print: false,
    download: false,
    filter: false,
    expandableRows: true,
    clickableRows: false,
    renderExpandableRow: (rowData, rowMeta) => {
        const colSpan = rowData.length + 1;
        return (
          <TableRow>
            <TableCell colSpan={colSpan}>
            {rowData[0]}
            </TableCell>
            <PatientDialog userID={rowData[0]}></PatientDialog>
          </TableRow>
          
        );
      },
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
            users:[],
            open:false
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