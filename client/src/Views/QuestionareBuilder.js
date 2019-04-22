import React, {Component} from 'react';
import update from 'react-addons-update';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import axios from "axios";

import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Swal from 'sweetalert2'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

class QuestionareBuilder extends Component{
  constructor() {
    super();
    this.state = {
      name: "",
      questions: [{ question: "", answers:[{answer:""}]}]
    };
  }
  
  handleNameChange = evt => {
    this.setState({ name: evt.target.value });
  };

  handleQuestionChange = idx => evt => {
    const newQuestions = this.state.questions.map((question, sidx) => {
      if (idx !== sidx) return question;
      return { ...question, question: evt.target.value };
    });

    this.setState({ questions: newQuestions });
  };
  handleAddQuestion = () => {
    this.setState({
      questions: this.state.questions.concat([{ question: "", answers:[{answer:""}] }])
    });
  };

  handleRemoveQuestion = idx => () => {
    this.setState({
      questions: this.state.questions.filter((s, sidx) => idx !== sidx)
    });
  };
  handleAddAnswer = idx => () => {
    const answer = {answer: ""};
    const allAnswers = this.state.questions[idx].answers.concat([answer]);
    let newQuestion = update(this.state.questions, {
      [idx]:{
        $set:{
          ...this.state.questions[idx],
          answers: allAnswers
        }
      }
    });
    this.setState({questions: newQuestion});
  };
  handleAnswerChange = (idx,idx2) => evt => {
    this.setState({ questions: update(this.state.questions,
      {[idx]:{answers: {[idx2]: {answer:{$set: evt.target.value}}}}}
      ) }); 
  };
  handleRemoveAnswer = (idx,idx2) => evt => {
    const answer = {answer: ""};
    const allAnswers = this.state.questions[idx].answers.filter((s, sidx) => idx2 !== sidx);
    let newQuestion = update(this.state.questions, {
      [idx]:{
        $set:{
          ...this.state.questions[idx],
          answers: allAnswers
        }
      }
    });
    this.setState({questions: newQuestion});
  };
  handleSubmit(){
    axios.post("/api/questionares/newQuestionare", {name: this.state.name, questions: this.state.questions})
      .then((response) => {
        this.setState({
          name: "",
          questions: [{ question: "", answers:[{answer:""}]}]
        })
        Swal.fire(
          'Success!',
          'The form will now be reviewed and approved',
          'success'
        )
      });
  }
  render() {
    var divStyle ={
      padding:"100px"
    }
    const classes = this.props;
    return (
      <div style={divStyle}>
      <Grid container className={classes.root} spacing={32}>
        <Grid item xs={12}>
          <Grid container className={classes.builder} justify="center" spacing={40}>
            <form onSubmit={this.handleSubmit}>
              <h4>Form Builder</h4>
              <input
                type="text"
                placeholder="Form Name: e.g PHQ9"
                value={this.state.name}
                onChange={this.handleNameChange}
              />
              {this.state.questions.map((question, idx) => (
                <div className="question">
                  <input
                    type="text"
                    placeholder={`Question #${idx + 1}`}
                    value={question.question}
                    onChange={this.handleQuestionChange(idx)}
                  />
                    <Button variant="contained" color="primary" size='small' className={classes.button} onClick={this.handleAddAnswer(idx)}>
                      Add Answer
                      <AddIcon className={classes.rightIcon} />
                    </Button>
                    <Button variant="contained" color="secondary" className={classes.button} onClick={this.handleRemoveQuestion(idx)}>
                      Delete Question
                      <DeleteIcon className={classes.rightIcon} />
                    </Button>
                  {this.state.questions[idx].answers.map((answer,idx2) =>(
                    <div className="answer">
                      <input
                        type="text"
                        placeholder={`Answer Option #${idx2 + 1}`}
                        value={answer.answer}
                        onChange={this.handleAnswerChange(idx,idx2)}
                      />
                      <Grid item>
                        <Button variant="contained" color="secondary" size='small' className={classes.button} onClick={this.handleRemoveAnswer(idx,idx2)}>
                          Remove Answer Option
                        <DeleteIcon className={classes.rightIcon} />
                        </Button>
                      </Grid>
                    </div>
                  ))}
                </div>
              ))}
              <Button variant="contained" color="primary" className={classes.button} onClick={()=>{this.handleAddQuestion()}}>
                  Add Question
                  <AddIcon className={classes.rightIcon} />
              </Button>
              <Button variant="contained" color="primary" className={classes.button} onClick={()=>{this.handleSubmit()}}>
                  Submit
                <CloudUploadIcon className={classes.rightIcon} />
              </Button>
            </form>
          </Grid>
        </Grid>
      </Grid>
      </div>
    );
  }
}
QuestionareBuilder.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(QuestionareBuilder);