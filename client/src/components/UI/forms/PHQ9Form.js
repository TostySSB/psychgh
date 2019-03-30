import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
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
function analyzeResults(q1,q2,q3,q4,q5,q6,q7,q8,q9,q10){
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
        return(
            <div>
                <h5>These symptoms are minimal</h5>
                <h5>Treatment: Support, ask to call if worse, return in 1 month</h5>
            </div>
        );
    }else if (severityScore>=10 && severityScore<=14){
        return(
            <div>
                <h5>These symptoms are consistent with Minor Depression Dysthymia or Major Depression, mild</h5>
                <h5>Treatment: Support, contact in one week Antidepressant or psychotherapy</h5>
            </div>
        );
    }else if (severityScore>=15 && severityScore<=19){
        return(
            <div>
                <h5>These symptoms are consistent with Major Depression, moderate</h5>
                <h5>Treatment: Antidepressant or psychotherapy</h5>
            </div>
        );
    }else if (severityScore>=20){
        return(
            <div>
                <h5>These symptoms are consistent with Major Depression, severe</h5>
                <h5>Treatment: Support, contact in one week Antidepressant and psychotherapy (especially if not improved on monotherapy)</h5>
            </div>
        );
    }else if (severityScore>=0 && severityScore<=4){
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
class PHQ9Form extends React.Component {
  state = {
    q1: -1,
    q2: -1,
    q3: -1,
    q4: -1,
    q5: -1,
    q6: -1,
    q7: -1,
    q8: -1,
    q9: -1,
    q10: -1,
  };

  handleChange1 = event => {
    this.setState({ q1: event.target.value });
  };
  handleChange2 = event => {
    this.setState({ q2: event.target.value });
  };
  handleChange3 = event => {
    this.setState({ q3: event.target.value });
  };
  handleChange4 = event => {
    this.setState({ q4: event.target.value });
  };
  handleChange5 = event => {
    this.setState({ q5: event.target.value });
  };
  handleChange6 = event => {
    this.setState({ q6: event.target.value });
  };
  handleChange7 = event => {
    this.setState({ q7: event.target.value });
  };
  handleChange8 = event => {
    this.setState({ q8: event.target.value });
  };
  handleChange9 = event => {
    this.setState({ q9: event.target.value });
  };
  handleChange10 = event => {
    this.setState({ q10: event.target.value });
    analyzeResults(Number(this.state.q1),Number(this.state.q2),Number(this.state.q3),Number(this.state.q4),Number(this.state.q5),Number(this.state.q6),Number(this.state.q7),Number(this.state.q8),Number(this.state.q9),Number(this.state.q10));
  };

  render() {
    const { classes } = this.props;

    return (
    <div>
        <h2>
            Over the past 2 weeks, how often have you been bothered
            by any of the following problems?
        </h2>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Little interest or pleasure in doing things</FormLabel>
          <RadioGroup
            aria-label="Q1"
            name="q1"
            className={classes.group}
            value={this.state.q1}
            onChange={this.handleChange1}
          >
            <FormControlLabel value="0" control={<Radio />} label="Not at all" />
            <FormControlLabel value="1" control={<Radio />} label="Several Days" />
            <FormControlLabel value="2" control={<Radio />} label="More than half the days" />
            <FormControlLabel value="3" control={<Radio />} label="Nearly every day" />
            {/* <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="(Disabled option)"
            /> */}
          </RadioGroup>
        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Feeling down, depressed, or hopeless</FormLabel>
          <RadioGroup
            aria-label="Q2"
            name="q2"
            className={classes.group}
            value={this.state.q2}
            onChange={this.handleChange2}
          >
            <FormControlLabel value="0" control={<Radio />} label="Not at all" />
            <FormControlLabel value="1" control={<Radio />} label="Several Days" />
            <FormControlLabel value="2" control={<Radio />} label="More than half the days" />
            <FormControlLabel value="3" control={<Radio />} label="Nearly every day" />
            {/* <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="(Disabled option)"
            /> */}
          </RadioGroup>
        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Trouble falling asleep, staying asleep, or sleeping too much</FormLabel>
          <RadioGroup
            aria-label="Q3"
            name="q3"
            className={classes.group}
            value={this.state.q3}
            onChange={this.handleChange3}
          >
            <FormControlLabel value="0" control={<Radio />} label="Not at all" />
            <FormControlLabel value="1" control={<Radio />} label="Several Days" />
            <FormControlLabel value="2" control={<Radio />} label="More than half the days" />
            <FormControlLabel value="3" control={<Radio />} label="Nearly every day" />
            {/* <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="(Disabled option)"
            /> */}
          </RadioGroup>
        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Feeling tired or having little energy</FormLabel>
          <RadioGroup
            aria-label="Q4"
            name="q4"
            className={classes.group}
            value={this.state.q4}
            onChange={this.handleChange4}
          >
            <FormControlLabel value="0" control={<Radio />} label="Not at all" />
            <FormControlLabel value="1" control={<Radio />} label="Several Days" />
            <FormControlLabel value="2" control={<Radio />} label="More than half the days" />
            <FormControlLabel value="3" control={<Radio />} label="Nearly every day" />
            {/* <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="(Disabled option)"
            /> */}
          </RadioGroup>
        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Poor appetite or overeating</FormLabel>
          <RadioGroup
            aria-label="Q5"
            name="q5"
            className={classes.group}
            value={this.state.q5}
            onChange={this.handleChange5}
          >
            <FormControlLabel value="0" control={<Radio />} label="Not at all" />
            <FormControlLabel value="1" control={<Radio />} label="Several Days" />
            <FormControlLabel value="2" control={<Radio />} label="More than half the days" />
            <FormControlLabel value="3" control={<Radio />} label="Nearly every day" />
            {/* <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="(Disabled option)"
            /> */}
          </RadioGroup>
        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Feeling bad about yourself - or that you are a failure - or that you have let yourself or your family down</FormLabel>
          <RadioGroup
            aria-label="Q6"
            name="q6"
            className={classes.group}
            value={this.state.q6}
            onChange={this.handleChange6}
          >
            <FormControlLabel value="0" control={<Radio />} label="Not at all" />
            <FormControlLabel value="1" control={<Radio />} label="Several Days" />
            <FormControlLabel value="2" control={<Radio />} label="More than half the days" />
            <FormControlLabel value="3" control={<Radio />} label="Nearly every day" />
            {/* <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="(Disabled option)"
            /> */}
          </RadioGroup>
        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Trouble concentrating on things such as reading the newspaper or watching television</FormLabel>
          <RadioGroup
            aria-label="Q7"
            name="q7"
            className={classes.group}
            value={this.state.q7}
            onChange={this.handleChange7}
          >
            <FormControlLabel value="0" control={<Radio />} label="Not at all" />
            <FormControlLabel value="1" control={<Radio />} label="Several Days" />
            <FormControlLabel value="2" control={<Radio />} label="More than half the days" />
            <FormControlLabel value="3" control={<Radio />} label="Nearly every day" />
            {/* <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="(Disabled option)"
            /> */}
          </RadioGroup>
        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Moving or speaking so slowly that other people could have noticed. Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual</FormLabel>
          <RadioGroup
            aria-label="Q8"
            name="q8"
            className={classes.group}
            value={this.state.q8}
            onChange={this.handleChange8}
          >
            <FormControlLabel value="0" control={<Radio />} label="Not at all" />
            <FormControlLabel value="1" control={<Radio />} label="Several Days" />
            <FormControlLabel value="2" control={<Radio />} label="More than half the days" />
            <FormControlLabel value="3" control={<Radio />} label="Nearly every day" />
            {/* <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="(Disabled option)"
            /> */}
          </RadioGroup>
        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Thought that you would be better off dead or of hurting yourself in some way</FormLabel>
          <RadioGroup
            aria-label="Q9"
            name="q9"
            className={classes.group}
            value={this.state.q9}
            onChange={this.handleChange9}
          >
            <FormControlLabel value="0" control={<Radio />} label="Not at all" />
            <FormControlLabel value="1" control={<Radio />} label="Several Days" />
            <FormControlLabel value="2" control={<Radio />} label="More than half the days" />
            <FormControlLabel value="3" control={<Radio />} label="Nearly every day" />
            {/* <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="(Disabled option)"
            /> */}
          </RadioGroup>
        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">If you answerd anything other that "not at all" to the questions above, how difficult have those problems made it for you to do your work, take care of things at home, or get along with other people? </FormLabel>
          <RadioGroup
            aria-label="Q10"
            name="q10"
            className={classes.group}
            value={this.state.q10}
            onChange={this.handleChange10}
          >
            <FormControlLabel value="0" control={<Radio />} label="Not difficult at all" />
            <FormControlLabel value="1" control={<Radio />} label="Somewhat difficult" />
            <FormControlLabel value="2" control={<Radio />} label="Very difficult" />
            <FormControlLabel value="3" control={<Radio />} label="Extremely difficult" />
            {/* <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="(Disabled option)"
            /> */}
          </RadioGroup>
        </FormControl>
      </div>
        {analyzeResults(Number(this.state.q1),Number(this.state.q2),Number(this.state.q3),Number(this.state.q4),Number(this.state.q5),Number(this.state.q6),Number(this.state.q7),Number(this.state.q8),Number(this.state.q9),Number(this.state.q10))}
      </div>
    );
  }
}

PHQ9Form.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PHQ9Form);