import React, {Component} from 'react';
import TestButton from '../components/TestButton';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import './DiagnosisChart.css';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

class DiagnosisChart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: "",
			lastName: ""
		};
	}
	
	handleSubmit = event => {
		event.preventDefault();
		console.log(this.state);
		fetch('api/submitExploration', {
			method: 'POST',
			body: JSON.stringify(this.state),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(res => {
			if (res.status === 200) {
				this.props.history.push('/');
			}
			else {
				const error = new Error(res.error);
				throw error;
			}
		}).catch(err => {
			console.log(err);
			alert('Submission failed. Please try again.');
		});
	}


	handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
    	});
  	}
 	
	render() {
		return (
			<div className='DiagnosisChart'>
		        <form onSubmit={this.handleSubmit}>
		        	<FormGroup controlId="firstName" bsSize="large">
		            	<ControlLabel>First Name</ControlLabel>
		            	<FormControl
		              		autoFocus
				            value={this.state.firstName}
				            onChange={this.handleChange}
		            	/>
		          </FormGroup>
		          <FormGroup controlId="lastName" bsSize="large">
		              <ControlLabel>Last Name</ControlLabel>
			          <FormControl
			          	value={this.state.lastName}
			            onChange={this.handleChange}

			           />
          		</FormGroup>
      			<Button
	            	block
	            	bsSize="large"
	            	type="submit"
	          	>
	            	Submit
	          </Button>
        	</form>
		</div>
		);
	}
}


export default DiagnosisChart;