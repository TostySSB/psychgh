import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import ResponseDialog from './ResponseDialog';
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

class TherapyModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: "",
			textSet: false
		};
	}

	updateEvals = () => {
		console.log(this.props.idNum + " " + this.props.type);
		this.setState({
			id: this.props.idNum,
			type: this.props.type
		}, () => {
			this.props.updateEvals();
		});
	}

	submitEval = () => {
		this.props.submitEval("therapy");
	}
	
	textFieldHandler = (event) => {
		// If it's the first time clicking the thing
		// we need to set state
		if (!this.state.textSet) {
			this.setState({textSet: true});
			this.setState({notes: this.props.evalData.notes});
		}
	}

	handleChange = event => {
		if (event.target.type === "textarea") {
			this.setState({notes: event.target.value});
		}
		this.props.handleEvalChange(event);
	}

	
	// Will probably have to delete this at some point, needless function
	makeDialogContent = () => {
		let content =
			<DialogContent>
						<Grid container spacing={40} justify='space-evenly' direction='row' alignItems='center'>
							<Grid item xs={12}>
								<FormControl variant="outlined" style={formStyle}>
									<DialogContentText>Medication</DialogContentText>
									<Select
										value={this.props.evalData.medication}
										native
										onChange={this.handleChange}
										input={<OutlinedInput name="medication"/>}
									>
										<option value="" />
										<option value={"citralopram"}>Citralopram</option>
										<option value={"sertraline"}>Sertraline</option>
									</Select>
								</FormControl>
							</Grid>
							<Grid item xs={12}>
								<FormControl variant="outlined" style={formStyle}>
									<TextField
										value={this.state.textSet ? this.state.notes : this.props.evalData.notes}
										name="notes"
										id="initial-therapy-notes"
										label="Notes on Side Effects"
										multiline
										rows="4"
										onChange={this.handleChange}
										onClick={this.textFieldHandler}
									/>
								</FormControl>
							</Grid>
						</Grid>
					</DialogContent>
		
		return content;
	}

	render() {
		console.log("PROPS:");
		console.log(this.props);
		console.log("STATE:");
		console.log(this.state);
		let dialogContent = this.makeDialogContent();
		return (
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
		        	<DialogTitle><h4>Initial Therapy</h4></DialogTitle>
					{dialogContent}
					<DialogActions>
						<Button onClick={this.props.nextEvalHandler.bind(this, this.props.type)}>Log Response</Button>
		        		<Button onClick={this.props.newExploration ? this.submitEval : this.updateEvals}>
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

export default TherapyModal;