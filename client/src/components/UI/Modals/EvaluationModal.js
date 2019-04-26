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

class EvaluationModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			evaluationNotes: "",
			textSet: false
		};
	}

	handleChange = event => {
		if (event.target.type === "textarea") {
			this.setState({evaluationNotes: event.target.value});
		}
		this.props.handleEvalChange(event);
	}

	textFieldHandler = (event) => {
		// If it's the first time clicking the thing
		// we need to set state
		if (!this.state.textSet) {
			this.setState({textSet: true});
			this.setState({evaluationNotes: this.props.evalData.evaluationNotes});
		}
	}

	updateEvals = () => {
		this.props.updateEvals();
	}

	submitEval = () => {
		this.props.submitEval("evaluation");
	}
	

	render() {
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
	        			<DialogTitle><h4>Evaluation</h4></DialogTitle>
							<DialogContent>
								<TextField
									name="evaluationNotes"
									value={this.state.textSet ? this.state.evaluationNotes : this.props.evalData.evaluationNotes}
									rows="5"
									multiline
									fullWidth
									label="Enter notes here"
									onChange={this.handleChange}
									onClick={this.textFieldHandler}
								/>
							</DialogContent>
							<DialogActions>
								<Button onClick={this.props.nextEvalHandler.bind(this, this.props.type)} color="primary">
									Log Next Response
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

export default EvaluationModal;