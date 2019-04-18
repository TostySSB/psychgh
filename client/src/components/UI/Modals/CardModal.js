import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
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

	// compnentWillMount() {
	// 	console.log(this.idNum);
	// 	// axios.get('api/explorations/getExploration', {params: this.props})
	// 	// .then(res => {
	// 	// 	if (res.status === 200) {
	// 	// 		console.log("She mounted boys.");
	// 	// 		console.log();
	// 	// 	}
	// 	// });

	// }
	
	handleChange = event => {
		this.setState({evalData: {
			...this.state.evalData, [event.target.name]: event.target.value
		}});
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
	
	makeForm = () => {
		let formContent;
		console.log(this.props.idNum);
		console.log(this.props.type);
		console.log(this.props.evalData);
		if (this.props.type == "therapy") {
			formContent = <div>
							<h4>Initial Therapy</h4>
							<div className={classes.Select}>
								<FormControl variant="outlined">
									<InputLabel>Medication</InputLabel>
									<Select
										value={this.props.evalData.medication}
										native
										onChange={this.handleChange}
										input={
											<OutlinedInput
												name="medication"
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
										value={this.props.evalData.therapyNotes}
										name="therapyNotes"
										id="initial-therapy-notes"
										label="Notes on Side Effects"
										multiline
										rows="4"
										onChange={this.handleChange}
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
										onChange={this.handleChange}
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
									name="evaluationNotes"
									rows="5"
									multiline
									label="Enter notes here"
									onChange={this.handleChange}
								/>
							</div>
						  </div>;
	
		}
		return formContent;
	};

	render() {
		let formContent = this.makeForm();
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
					<button onClick={this.updateEvals}>Save</button>
				</div>
			</Aux>
		);
	}
}


export default CardModal;