import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Backdrop from '../Backdrop/Backdrop';
import Button from '@material-ui/core/Button';
import classes from './Modal.css';

class ResponseDialog extends Component {
	state = {
		type: ""
	}

	handleTypeChange = event => {
		console.log("EVENT:");
		console.log(event.target.value);
		this.setState({type: event.target.value});
	}

	makeBody = () => {
		let dialogBody;
		if (this.state.type == "non-response") {
			dialogBody = 
			<div>
				<Grid item xs={12}>
					<DialogContentText>
						<p>
							Switch Antidepressants?
						</p>
					</DialogContentText>
					<FormControl>
						<Select
						native
						input={<OutlinedInput name="medication"/>}
						>
							<option value="citalopram">Citralopram</option>
							<option value="sertraline">Sertraline</option>
						</Select>
					</FormControl>
				</Grid>
			</div>;
		}
		else if (this.state.type == "partial-response") {
			dialogBody = 
			<div>
				<Grid item xs={12}>
					<DialogContentText>
						<p>
							What would you like to do?
						</p>
					</DialogContentText>
					<FormControl>
						<Select
						native
						input={<OutlinedInput name="response-decision"/>}
						>
							<option value="optimize">Optimize Dose</option>
							<option value="sertraline">Augment Dose</option>
							<option value="switch-med">Switch Medication</option>
						</Select>
					</FormControl>
				</Grid>
			</div>;
		}
		else if (this.state.type == "full-response") {
			dialogBody = 
			<div>
				<Grid item xs={12}>
					<p>Full Response. Treatment will continue</p>
				</Grid>
			</div>;
		}
		
		else dialogBody = <div></div>;
		return dialogBody;
	}

	render() {
		let dialogBody = this.makeBody();
		return (
			<DialogContent>
				<Grid container>
					<Grid item xs={12}>
						<FormControl>
							<Select
								native
								input={<OutlinedInput />}
								onChange={this.handleTypeChange}
							>
								<option value="">Select Response Type</option>
								<option value="non-response">Non Response</option>
								<option value="partial-response">Partial Response</option>
								<option value="full-response">Full Response</option>
							</Select>
						</FormControl>
					</Grid>
					{dialogBody}
				</Grid>
			</DialogContent>
		);
	}

}

export default ResponseDialog;