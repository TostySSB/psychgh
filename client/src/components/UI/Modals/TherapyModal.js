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
import Aux from '../../Aux';

class TherapyModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: ""
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


	handleChange = event => {
		console.log(event.target.type);
		if (event.target.type === "textarea") {
			console.log("It's a text area");
		}
		this.props.handleEvalChange(event);
	}

	
	// Will probably have to delete this at some point, needless function
	makeDialogContent = () => {
		let content =
			<DialogContent>
						<Grid container spacing={40} justify='space-evenly' direction='row' alignItems='center'>
							<Grid item xs={12}>
								<FormControl variant="outlined" className={classes.FormControl}>
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
								<FormControl variant="outlined" className={classes.FormControl}>
									<TextField
										//TODO figure out the functionality to update the notes.
										value={this.props.evalData.therapyNotes}
										name="notes"
										id="initial-therapy-notes"
										label="Notes on Side Effects"
										multiline
										rows="4"
										onChange={this.handleChange}
									/>
								</FormControl>
							</Grid>
						</Grid>
					</DialogContent>
		
		return content;
	}

	render() {
		console.log(this.props);
		let dialogContent = this.makeDialogContent();
		return (
			<Aux>
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
		        		<Button onClick={this.props.newEvaluation ? this.submitEval : this.updateEvals}>
		        			Save
		        		</Button>
			            <Button onClick={this.props.modalClosed} color="primary">
			            	Close
			            </Button>
	  				</DialogActions>
	        	</Dialog>
			</Aux>
		);
	}
}

export default TherapyModal;