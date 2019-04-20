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

class ResponseModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			stuff: ""
		}
	}

	render() {
		return(
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
	    			<DialogTitle><h4>Response</h4></DialogTitle>
						<ResponseDialog />
						<DialogActions>
							<Button onClick={this.props.nextEvalHandler.bind(this, this.props.type)}>
								Log Evaluation
							</Button>
			        		<Button onClick={this.updateEvals}>
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

export default ResponseModal;