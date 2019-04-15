import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import axios from "axios";
import { connect } from "react-redux";

//Note, this is a temporary hot fix solution to doing this form, I sincerely appologize to any poor soul who has to read this
const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});
class PHQ9Form extends React.Component {
  state = {
    q1: 100,
    q2: 100,
    q3: 100,
    q4: 100,
    q5: 100,
    q6: 100,
    q7: 100,
    q8: 100,
    q9: 100,
    q10: 100,
    sum: 0,
    complete: true,
    results: "Please complete the PHQ9 Test to view your results"
  };
  analyzeResults(q1,q2,q3,q4,q5,q6,q7,q8,q9,q10){
    var diagDep = 0;
    if (q1 >= 2 || q3 >=2){
        diagDep +=1;
    }
    var symptomCount = 0;
    if (q1>=2){
        symptomCount +=1;
    }
    if (q2>=2){
        symptomCount +=1;
    }
    if (q3>=2){
        symptomCount +=1;
    }
    if (q4>=2){
        symptomCount +=1;
    }
    if (q5>=2){
        symptomCount +=1;
    }
    if (q6>=2){
        symptomCount +=1;
    }
    if (q7>=2){
        symptomCount +=1;
    }
    if (q8>=2){
        symptomCount +=1;
    }
    if (q9>=1){
        symptomCount+=1;
    }
    if(symptomCount>=5){
        diagDep += 1;
    }
    if (q10>=1){
        diagDep +=1;
    }
    var severityScore = 0;
    if(q1>=0&&q2>=0&&q3>=0&&q4>=0&&q5>=0&&q6>=0&&q7>=0&&q8>=0&&q9>=0&&q10>=0){
        severityScore = q1+q2+q3+q4+q5+q6+q7+q8+q9;
    }
    if(severityScore>=5 && severityScore<=9){
      this.setState({results:"These symptoms are minimal    Treatment: Support, ask to call if worse, return in 1 month"})
        return(
            <div>
                <h5>These symptoms are minimal</h5>
                <h5>Treatment: Support, ask to call if worse, return in 1 month</h5>
            </div>
        );
    }else if (severityScore>=10 && severityScore<=14){
      this.setState({results:"These symptoms are consistent with Minor Depression Dysthymia or Major Depression, mild    Treatment: Support, contact in one week Antidepressant or psychotherapy"})
        return(
            <div>
                <h5>These symptoms are consistent with Minor Depression Dysthymia or Major Depression, mild</h5>
                <h5>Treatment: Support, contact in one week Antidepressant or psychotherapy</h5>
            </div>
        );
    }else if (severityScore>=15 && severityScore<=19){
      this.setState({results:"These symptoms are consistent with Major Depression, moderate     Treatment: Antidepressant or psychotherapy"})
        return(
            <div>
                <h5>These symptoms are consistent with Major Depression, moderate</h5>
                <h5>Treatment: Antidepressant or psychotherapy</h5>
            </div>
        );
    }else if (severityScore>=20){
      this.setState({results:"These symptoms are consistent with Major Depression, severe    Treatment: Support, contact in one week Antidepressant and psychotherapy (especially if not improved on monotherapy)"})
        return(
            <div>
                <h5>These symptoms are consistent with Major Depression, severe</h5>
                <h5>Treatment: Support, contact in one week Antidepressant and psychotherapy (especially if not improved on monotherapy)</h5>
            </div>
        );
    }else if (severityScore>=0 && severityScore<=4){
      this.setState({results:"There no symptoms of depression"})
        return(
            <div>
                <h5>There no symptoms of depression</h5>
            </div>
        );
    }else{
       return (
        <div>
            <h5>Please make sure all questions have been answered</h5>
        </div>
        ); 
    }
    
}
  componentDidMount(){
    this.calculateSum();
    this.setState({complete: true})
  }
  calculateSum(){
    var test = Number(this.state.q1)+Number(this.state.q2)+Number(this.state.q3)+Number(this.state.q4)+Number(this.state.q5)+Number(this.state.q6)+Number(this.state.q7)+Number(this.state.q8)+Number(this.state.q9)+Number(this.state.q10);
    this.setState({sum: Number(test)})
    if (Number(this.state.sum) < 100 ){
      this.setState({complete: false})
    }else{
      this.setState({complete: true})
    }
  };
  getButton(){
    if (this.state.sum<100){
      return(
        <Button variant="contained" color="primary" disabled = {false} onClick={() => {this.handleSubmit()}}>
           Submit
        </Button>
      )
    }
    else{
      return(
        <Button variant="contained" color="primary" disabled = {true} onClick={() => {this.handleSubmit()}}>
           Submit
        </Button>
      )
    }
  }
  handleChange(e) {
    this.setState({ [e.target.name] : e.target.value }
      , function () {
        this.calculateSum();
      });
    this.calculateSum();
  }
  handleSubmit(){
    {this.analyzeResults(Number(this.state.q1),Number(this.state.q2),Number(this.state.q3),Number(this.state.q4),Number(this.state.q5),Number(this.state.q6),Number(this.state.q7),Number(this.state.q8),Number(this.state.q9),Number(this.state.q10))}
    const {user} = this.props.auth;
    this.calculateSum();
    axios.post("/api/phq9s/q1", {email: user.email, q1:this.state.q1, q2:this.state.q2, q3:this.state.q3, q4:this.state.q4,q5:this.state.q5,q6:this.state.q6,q7:this.state.q7,q8:this.state.q8,q9:this.state.q9,q10:this.state.q10, results: this.state.results});
  };
  render() {
    const { user } = this.props.auth;
    return (
    <div>
        <h2>
            Over the past 2 weeks, how often have you been bothered
            by any of the following problems?
        </h2>
      <div >
        <FormControl component="fieldset" >
          <FormLabel component="legend">Little interest or pleasure in doing things</FormLabel>
          <RadioGroup
            aria-label="Q1"
            name="q1"
            value={Number(this.state.q1)}
            onChange={this.handleChange.bind(this)}
          >
            <FormControlLabel value={0} control={<Radio />} label="Not at all" />
            <FormControlLabel value={1} control={<Radio />} label="Several Days" />
            <FormControlLabel value={2} control={<Radio />} label="More than half the days" />
            <FormControlLabel value={3} control={<Radio />} label="Nearly every day" />
            {/* <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="(Disabled option)"
            /> */}
          </RadioGroup>
        </FormControl>
      </div>
      <div >
        <FormControl component="fieldset" >
          <FormLabel component="legend">Feeling down, depressed, or hopeless</FormLabel>
          <RadioGroup
            aria-label="Q2"
            name="q2"
            
            value={Number(this.state.q2)}
            onChange={this.handleChange.bind(this)}
          >
            <FormControlLabel value={0} control={<Radio />} label="Not at all" />
            <FormControlLabel value={1} control={<Radio />} label="Several Days" />
            <FormControlLabel value={2} control={<Radio />} label="More than half the days" />
            <FormControlLabel value={3} control={<Radio />} label="Nearly every day" />
            {/* <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="(Disabled option)"
            /> */}
          </RadioGroup>
        </FormControl>
      </div>
      <div >
        <FormControl component="fieldset" >
          <FormLabel component="legend">Trouble falling asleep, staying asleep, or sleeping too much</FormLabel>
          <RadioGroup
            aria-label="Q3"
            name="q3"
            
            value={Number(this.state.q3)}
            onChange={this.handleChange.bind(this)}
          >
            <FormControlLabel value={0} control={<Radio />} label="Not at all" />
            <FormControlLabel value={1} control={<Radio />} label="Several Days" />
            <FormControlLabel value={2} control={<Radio />} label="More than half the days" />
            <FormControlLabel value={3} control={<Radio />} label="Nearly every day" />
            {/* <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="(Disabled option)"
            /> */}
          </RadioGroup>
        </FormControl>
      </div>
      <div >
        <FormControl component="fieldset" >
          <FormLabel component="legend">Feeling tired or having little energy</FormLabel>
          <RadioGroup
            aria-label="Q4"
            name="q4"
            
            value={Number(this.state.q4)}
            onChange={this.handleChange.bind(this)}
          >
            <FormControlLabel value={0} control={<Radio />} label="Not at all" />
            <FormControlLabel value={1} control={<Radio />} label="Several Days" />
            <FormControlLabel value={2} control={<Radio />} label="More than half the days" />
            <FormControlLabel value={3} control={<Radio />} label="Nearly every day" />
            {/* <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="(Disabled option)"
            /> */}
          </RadioGroup>
        </FormControl>
      </div>
      <div >
        <FormControl component="fieldset" >
          <FormLabel component="legend">Poor appetite or overeating</FormLabel>
          <RadioGroup
            aria-label="Q5"
            name="q5"
            
            value={Number(this.state.q5)}
            onChange={this.handleChange.bind(this)}
          >
            <FormControlLabel value={0} control={<Radio />} label="Not at all" />
            <FormControlLabel value={1} control={<Radio />} label="Several Days" />
            <FormControlLabel value={2} control={<Radio />} label="More than half the days" />
            <FormControlLabel value={3} control={<Radio />} label="Nearly every day" />
            {/* <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="(Disabled option)"
            /> */}
          </RadioGroup>
        </FormControl>
      </div>
      <div >
        <FormControl component="fieldset" >
          <FormLabel component="legend">Feeling bad about yourself - or that you are a failure - or that you have let yourself or your family down</FormLabel>
          <RadioGroup
            aria-label="Q6"
            name="q6"
            
            value={Number(this.state.q6)}
            onChange={this.handleChange.bind(this)}
          >
            <FormControlLabel value={0} control={<Radio />} label="Not at all" />
            <FormControlLabel value={1} control={<Radio />} label="Several Days" />
            <FormControlLabel value={2} control={<Radio />} label="More than half the days" />
            <FormControlLabel value={3} control={<Radio />} label="Nearly every day" />
            {/* <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="(Disabled option)"
            /> */}
          </RadioGroup>
        </FormControl>
      </div>
      <div >
        <FormControl component="fieldset" >
          <FormLabel component="legend">Trouble concentrating on things such as reading the newspaper or watching television</FormLabel>
          <RadioGroup
            aria-label="Q7"
            name="q7"
            
            value={Number(this.state.q7)}
            onChange={this.handleChange.bind(this)}
          >
            <FormControlLabel value={0} control={<Radio />} label="Not at all" />
            <FormControlLabel value={1} control={<Radio />} label="Several Days" />
            <FormControlLabel value={2} control={<Radio />} label="More than half the days" />
            <FormControlLabel value={3} control={<Radio />} label="Nearly every day" />
            {/* <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="(Disabled option)"
            /> */}
          </RadioGroup>
        </FormControl>
      </div>
      <div >
        <FormControl component="fieldset" >
          <FormLabel component="legend">Moving or speaking so slowly that other people could have noticed. Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual</FormLabel>
          <RadioGroup
            aria-label="Q8"
            name="q8"
            
            value={Number(this.state.q8)}
            onChange={this.handleChange.bind(this)}
          >
            <FormControlLabel value={0} control={<Radio />} label="Not at all" />
            <FormControlLabel value={1} control={<Radio />} label="Several Days" />
            <FormControlLabel value={2} control={<Radio />} label="More than half the days" />
            <FormControlLabel value={3} control={<Radio />} label="Nearly every day" />
            {/* <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="(Disabled option)"
            /> */}
          </RadioGroup>
        </FormControl>
      </div>
      <div >
        <FormControl component="fieldset" >
          <FormLabel component="legend">Thought that you would be better off dead or of hurting yourself in some way</FormLabel>
          <RadioGroup
            aria-label="Q9"
            name="q9"
            
            value={Number(this.state.q9)}
            onChange={this.handleChange.bind(this)}
          >
            <FormControlLabel value={0} control={<Radio />} label="Not at all" />
            <FormControlLabel value={1} control={<Radio />} label="Several Days" />
            <FormControlLabel value={2} control={<Radio />} label="More than half the days" />
            <FormControlLabel value={3} control={<Radio />} label="Nearly every day" />
            {/* <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="(Disabled option)"
            /> */}
          </RadioGroup>
        </FormControl>
      </div>
      <div className="Q10">
        <FormControl component="fieldset" >
          <FormLabel component="legend">If you answerd anything other that "not at all" to the questions above, how difficult have those problems made it for you to do your work, take care of things at home, or get along with other people? </FormLabel>
          <RadioGroup
            name="q10"
            value={Number(this.state.q10)}
            onChange={this.handleChange.bind(this)}
          >
            <FormControlLabel value={0} control={<Radio />} label="Not difficult at all" />
            <FormControlLabel value={1} control={<Radio />} label="Somewhat difficult" />
            <FormControlLabel value={2} control={<Radio />} label="Very difficult" />
            <FormControlLabel value={3} control={<Radio />} label="Extremely difficult" />
            {/* <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="(Disabled option)"
            /> */}
          </RadioGroup>
        </FormControl>
      </div>
        {this.getButton()}
        
      </div>
    );
  }
}

PHQ9Form.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps
)(PHQ9Form);
