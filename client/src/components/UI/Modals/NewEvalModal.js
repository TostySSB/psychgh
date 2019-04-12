import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.css';
import Aux from '../../Aux';

const newEvalModal = (props) => (
		<Aux>
			<Backdrop show={props.show} clicked={props.modalClosed} />
			<div
				className={classes.Modal}
				style={{
					transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
					opacity: props.show ? '1' : '0'
				}}
			>
				{props.children}
			</div>
		</Aux>
);


export default newEvalModal;