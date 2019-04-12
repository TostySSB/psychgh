import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const patientBio = (props) => {
	return(
		<div>
			<p>Age: {props.age}</p>
			<p>Diagnosis: {props.diagnosis}</p>
		</div>
	);
}

export default patientBio;