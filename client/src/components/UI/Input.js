import React from 'react';
import classes from './Input.css';

const input = (props) => {
	let inputElement = null;
	switch (props.inputType) {
			case ('input'):
				inputElement = <input className={classes.InputElement} {...props} />;
				break;
			case ('textArea'):
				inputElement = <textArea className={classes.InputElement} {...props} />;
				break;
			default:
				inputElement = <input className={classes.InputElement} {...props} />
		}

	return (
		<div classes={classes.Input}>
			<label>{props.label}</label>
			{inputElement}
		</div>
	);
}

export default input;