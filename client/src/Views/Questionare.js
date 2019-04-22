import React, {Component} from 'react';
import axios from "axios";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing.unit * 2,
    },
});
  

class Questionare extends Component{
    constructor() {
        super();
        this.state = {
          questionareMap: [1,2,3],
        };
      }
    componentDidMount(){
        axios.get('/api/questionares/questionareList')
            .then(response => {
                this.setState({questionareMap: response.data})
            })
            .catch(function(error){
                console.log(error)
        })
    }
    renderItems(){
        return <div>{this.state.questionareMap[0].formName}</div>
    }
    render(){
        const { classes } = this.props;
        return(
            <div>
                <div className="col s12 center-align">
                    <h4>
                    <b>Form:</b> please select a form below to get started.
                    </h4>
                    
                    <form className={classes.root} autoComplete="off">
                        <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="form-select">Form</InputLabel>
                        <Select
                            value={this.state.age}
                            onChange={this.handleChange}
                            inputProps={{
                            name: 'form',
                            id: 'form-select',
                            }}
                        >
                            <MenuItem value="">
                            <em>None</em>
                            </MenuItem>
                            {this.renderItems()}
                        </Select>
                        </FormControl>
                    </form>
                </div>
            </div>
        )
    }
}
Questionare.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(Questionare);