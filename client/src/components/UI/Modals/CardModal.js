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


class CardModal extends Component {
	constructor(props) {
		super(props);
		this.idNum = props.idNum;
		this.type = props.type;
		this.evalData = props.evalData
		this.state = {
			id: "",
			type: ""
		}
	}
	
	handleChange = event => {
		this.setState({evalData: {
			...this.state.evalData, [event.target.name]: event.target.value
		}});
	}

	nextEvalHandler = (type) => {
		console.log("Next Eval Triggered");
		console.log(this.props.type);
		if (this.props.type == "therapy") {
			// formContent = makeForm("evaluation")
			
		}
	}

	updateEvals = () => {
		console.log(this.props.idNum + " " + this.props.type);
		this.setState({
			id: this.props.idNum,
			type: this.props.type
		}, () => {
			this.props.updateEvals(this.state);
		});
	}
	
	makeForm = (type) => {
		let formContent;
		// console.log(this.props.idNum);
		// console.log(this.props.type);
		// console.log(this.props.evalData);
		if (type == "therapy") {
			formContent =
				<div> 
				<DialogTitle>
					<h4>Initial Therapy</h4>
				</DialogTitle>
				<DialogContent>
					<Grid container spacing={40} justify='space-evenly' direction='row' alignItems='center'>
						<Grid item xs={12}>
							<FormControl variant="outlined">
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
									value={this.props.evalData.therapyNotes}
									name="therapyNotes"
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
				<DialogActions>
					<Button onClick={this.nextEvalHandler}>Log Response</Button>
	        		<Button onClick={this.updateEvals}>
	        			Save
	        		</Button>
		            <Button onClick={this.props.modalClosed} color="primary">
		            	Close
		            </Button>
  				</DialogActions>
				</div>;
		}
		else if (type == "response") {
			formContent = <div>
							<DialogTitle><h4>Response</h4></DialogTitle>
							<ResponseDialog />
							<DialogActions>
								<Button>Log Evaluation</Button>
				        		<Button onClick={this.updateEvals}>
				        			Save
				        		</Button>
					            <Button onClick={this.props.modalClosed} color="primary">
					            	Close
					            </Button>
				          </DialogActions>
						  </div>;
	
		}
		else if (type == "evaluation") {
			formContent = <div>
							<h4>Evaluation</h4>
							<div>
								<TextField
									name="evaluationNotes"
									rows="5"
									multiline
									label="Enter notes here"
									onChange={this.handleChange}
								/>
							</div>
							<DialogActions>
								<Button>Log Next Response></Button>
				        		<Button onClick={this.updateEvals}>
				        			Save
				        		</Button>
					            <Button onClick={this.props.modalClosed} color="primary">
					            	Close
					            </Button>
				          </DialogActions>
						  </div>;
	
		}
		return formContent;
	};

	render() {
		let formContent = this.makeForm(this.props.type);
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
	        		{formContent}
	        	</Dialog>
			</Aux>
		);
	}
}


export default CardModal;