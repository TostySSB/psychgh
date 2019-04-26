import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
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

const formStyle = {
	width: "100%"
}

class ResponseModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: props.idNum,
			type: "",
			action: {}
		}
	}

	handleChange = event => {
		console.log(event.target.name + " " + event.target.value);
		if (event.target.name === "response_type") {
			this.setState({type: event.target.value});
		}
		if (event.target.type === "textarea") {
			console.log("It's a text area");
		}
		this.props.handleEvalChange(event);
	}

	updateEvals = () => {
		this.props.updateEvals();
	}

	submitEval = () => {
		this.props.submitEval("response");
	}

	handleTypeChange = event => {
		this.setState({type: event.target.value});
	}

	handleActionChange = event => {
		console.log(this.state.type);
		console.log(event.target.value);
	}

	makeBody = () => {
		let dialogBody;
		if (this.state.type === "non_response" || this.props.evalData.response_type === "non_response") {
			dialogBody = 
			<div>
				<Grid item xs={12}>
					<DialogContentText>
						<p>
							Switch Antidepressants?
						</p>
					</DialogContentText>
					<FormControl style={formStyle}>
						<Select
							native
							value={this.props.evalData.change_medication}
							onChange={this.handleChange}
							input={<OutlinedInput name="change_medication"/>}
						>
							<option value="citalopram">Citralopram</option>
							<option value="sertraline">Sertraline</option>
						</Select>
					</FormControl>
				</Grid>
			</div>;
		}
		else if (this.state.type === "partial_response" || this.props.evalData.response_type === "partial_response") {
			dialogBody = 
			<div>
				<Grid item xs={12}>
					<DialogContentText>
						<p>
							What would you like to do?
						</p>
					</DialogContentText>
					<FormControl style={formStyle}>
						<Select
							native
							value={this.props.evalData.response_decision}
							onChange={this.handleChange}
							input={<OutlinedInput name="response_decision"/>}
						>
							<option value="optimize">Optimize Dose</option>
							<option value="augment_med">Augment Dose</option>
							<option value="switch_med">Switch Medication</option>
						</Select>
					</FormControl>
				</Grid>
			</div>;
		}
		else if (this.state.type == "full_response" || this.props.evalData.response_type === "full_response") {
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
		console.log(this.props);
		return(
			<div>
				<Backdrop show={this.props.show} clicked={this.props.modalClosed} />
				<Dialog
					open={this.props.show}
					style={{
						transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
						opacity: this.props.show ? '1' : '0'
					}}
		          	aria-labelledby="form-dialog-title"
		          	fullWidth
		          	maxWidth='sm'
	        	>
	    			<DialogTitle><h4>Response</h4></DialogTitle>
						<DialogContent>
							<Grid container>
								<Grid item xs={12}>
									<FormControl style={formStyle}>
										<Select
											value={this.props.evalData.response_type}
											native
											input={<OutlinedInput name="response_type"/>}
											onChange={this.handleChange}
										>
											<option value="">Select Response Type</option>
											<option value="non_response">Non Response</option>
											<option value="partial_response">Partial Response</option>
											<option value="full_response">Full Response</option>
										</Select>
									</FormControl>
								</Grid>
								{dialogBody}
							</Grid>
						</DialogContent>
						<DialogActions>
							<Button onClick={this.props.nextEvalHandler.bind(this, this.props.type)} color="primary">
								Log Evaluation
							</Button>
			        		<Button onClick={this.props.newExploration ? this.submitEval : this.updateEvals} color="primary">
			        			Save
			        		</Button>
				            <Button onClick={this.props.modalClosed} color="primary">
				            	Close
				            </Button>
			          </DialogActions>
	        	</Dialog>
			</div>
		);
	}
}

export default ResponseModal;