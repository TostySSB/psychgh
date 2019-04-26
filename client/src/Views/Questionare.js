import React, {Component} from 'react';
import axios from "axios";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from '@material-ui/core/Select';
import { FormLabel } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import RadioGroup from '@material-ui/core/RadioGroup';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { connect } from "react-redux";
import Swal from 'sweetalert2';

const styles = theme => ({
    root: {
      
    },
    button: {
        margin: theme.spacing.unit,
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 350,
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    selectEmpty: {
      marginTop: theme.spacing.unit * 2,
    },
    
});
  

class Questionare extends Component{
    constructor() {
        super();
        this.state = {
          questionareMap: [{name: "", approved:true, questions: [{ question: "", answers:[{answer:""}]}]}],
          formIndex: -1,
          answerValues: [-22,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12],
        };
      }
      
    componentWillMount(){
        axios.get('/api/questionares/questionareList')
            .then(response => {
                this.setState({questionareMap: response.data})
            })
            .catch(function(error){
                console.log(error)
        })
    }
    fillState(){
        const answersValues = [];
        var x = 0;
        if (this.state.formIndex != -1){
            {this.state.questionareMap[this.state.formIndex].questions.map((item, key) =>
                answersValues[key] = -1
            )}
        }
        this.setState({answerValues: answersValues});
    }

    handleAnswer(idx, value){
        var tempArray = [...this.state.answerValues];
        tempArray[idx] = value;
        this.setState({answerValues:tempArray})
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value }, () => {
            this.fillState();
            }
        );
    };

    handleSubmit(){
        const {user} = this.props.auth;
        axios.post("/api/questionares/" + this.state.questionareMap[this.state.formIndex].formName, {email: user.email, answers: this.state.answerValues})
          .then((response) => {
            this.setState({
                questionareMap: [{formName: "", questions: [{ question: "", answers:[{answer:""}]}]}],
                formIndex: -1,
                answerValues: [1,2,3],
            })
            Swal.fire(
              'Success!',
              'Your form has been submitted, navigate to \'My Results\' to view your results.',
              'success'
            )
            axios.get('/api/questionares/questionareList')
            .then(response => {
                this.setState({questionareMap: response.data})
            })
            .catch(function(error){
                console.log(error)
            })
          });
      }
    renderMenuItems(){
        const items = this.state.questionareMap.map((item, key) =>
            {if(item.approved == true){
                return <MenuItem value={key}>{item.formName}</MenuItem>
            }else{
                return null;
            }}
        )
        return items;
    }
    renderForm(){ 
        if (this.state.formIndex != -1){
            return(
                <div>
                    <div>
                    <FormControl component="fieldset">
                        {this.state.questionareMap[this.state.formIndex].questions.map((item, key) =>
                            <div>
                            <FormLabel comonent="legend"><h5>{item.question}</h5></FormLabel>
                                <RadioGroup
                                    aria-label="Q1"
                                    name="q1"
                                    value={this.state.answerValues[key]}
                                >
                                {this.state.questionareMap[this.state.formIndex].questions[key].answers.map((item, key1) =>
                                    <FormControlLabel value={key1} control={<Radio />} onChange={()=>{this.handleAnswer(key, key1)}} label={item.answer} />
                                )}
                                </RadioGroup>
                            </div>
                        )}
                    </FormControl>
                    </div>
                    <Button variant="contained" color="primary" className={this.props.classes.button} onClick={()=>{this.handleSubmit()}}>
                        Submit
                        <CloudUploadIcon className={this.props.classes.rightIcon} />
                    </Button>
                </div>
            )
        }
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
                            value={this.state.formIndex}
                            onChange={this.handleChange}
                            inputProps={{
                            name: 'formIndex',
                            id: 'form-select',
                            }}
                        >
                            <MenuItem value={-1}>
                            <em>None</em>
                            </MenuItem>
                            {this.renderMenuItems()}
                        </Select>
                        </FormControl>
                    </form>
                    {this.renderForm()}
                    
                </div>
            </div>
        )
    }
}
Questionare.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps
  )(withStyles(styles)(Questionare));