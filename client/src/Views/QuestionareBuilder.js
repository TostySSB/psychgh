import React, {Component} from 'react';
import update from 'react-addons-update';

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

  handleSubmit = evt => {
    const { name, questions } = this.state;
    alert(`Incorporated: ${name} with ${questions.length} questions`);
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

  render() {
    return (
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
            <button
              type="button"
              onClick={this.handleRemoveQuestion(idx)}
              className="small"
            >
              Remove Question {idx + 1}
            </button>
            <button
                type="button"
                onClick={this.handleAddAnswer(idx)}
                className="small"
              >
                Add Answer
              </button>
            {this.state.questions[idx].answers.map((answer,idx2) =>(
              <div className="answer">
                <input
                  type="text"
                  placeholder={`Answer #${idx2 + 1} name`}
                  value={answer.answer}
                  onChange={this.handleAnswerChange(idx,idx2)}
                />
                <button
                type="button"
                onClick= {this.handleRemoveAnswer(idx,idx2)}
                className="small"
                >
                Remove Answer # {idx2 + 1}
              </button>
              </div>
            ))}
          </div>
        ))}
        <button
          type="button"
          onClick={this.handleAddQuestion}
          className="small"
        >
          Add Question
        </button>
        <button>Submit</button>
      </form>
    );
  }
}

export default QuestionareBuilder;