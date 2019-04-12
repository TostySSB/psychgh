import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.css';
import Aux from '../../Aux';

// const styles = theme => ({
// 		root: {
// 			display: 'flex',
// 			flexWrap: 'wrap'
// 		},
// 		formControl: {
// 			margin: theme.spacing.unit,
// 			minWidth: 120,
// 			fullWidth: true
// 		},
// 		textField: {
// 		    marginLeft: theme.spacing.unit,
// 		    marginRight: theme.spacing.unit
//   		},
// 		selectEmpty: {
// 			marginTop: theme.spacing.unit * 2
// 		}
// 	});



class CardModal extends Component {
	state = {
		var1: '',
		var2: '',
		labelWidth: 0
	}

	saveCardContent = () => {
		//Save the card content
	}

	render() {
			let formContent;
			if (this.props.type == "therapy") {
				formContent = <div>
								<h4>Initial Therapy</h4>
								<div className={classes.Select}>
									<FormControl variant="outlined">
										<InputLabel>Medication</InputLabel>
										<Select
											native 
											input={
												<OutlinedInput
													name="medication"
													labelWidth={this.state.labelWidth}
												/>
											}
										>
											<option value="" />
											<option value={"citralopram"}>Citralopram</option>
											<option value={"sertraline"}>Sertraline</option>
										</Select>
									</FormControl>
								</div>
								<div className={classes.TextField}>
									<FormControl variant="outlined" className={classes.FormControl}>
										<TextField
											id="initial-therapy-notes"
											label="Notes on Side Effects"
											multiline
											rows="4"
										/>
									</FormControl>
								</div>
							  </div>;
			}
			else if (this.props.type == "response") {
				formContent = <div>
								<h4>Response</h4>
								<div>
									<FormControl>
										<InputLabel>
											Response Type
										</InputLabel>
										<Select
											native 
											input={
												<OutlinedInput
													name="medication"
													labelWidth={this.state.labelWidth}
												/>
											}
										>
											<option value="" />
											<option value={"non"}>Non-Response</option>
											<option value={"partial"}>Partial Response</option>
											<option value={"full"}>Full Response</option>
										</Select>
									</FormControl>
								</div>
							  </div>;

			}
			else if (this.props.type == "evaluation") {
				formContent = <div>
								<h4>Evaluation</h4>
								<div>
									<TextField
										id="evaluation-notes"
										rows="5"
										multiline
										label="Enter notes here"
									/>
								</div>
							  </div>;

			}
			return (
				<Aux>
					<Backdrop show={this.props.show} clicked={this.props.modalClosed} />
					<div
						className={classes.Modal}
						style={{
							transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
							opacity: this.props.show ? '1' : '0'
						}}>

						{formContent}
						<button onClick={this.saveCardContent}>Save</button>
					</div>
				</Aux>
			);
	}
}


export default CardModal;