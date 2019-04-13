import React from 'react';
import classes from './DiagnosisControl.css';

const diagnosisControl = (props) => (
	<div className={classes.DiagnosisControl}>
		<button onClick={props.added}>Add New Card</button>
	</div>
);

export default diagnosisControl;