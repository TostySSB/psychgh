import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import classes from './DiagnosisCard.css';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import DiagnosisCardHeader from './DiagnosisCardHeader';
import PatientBio from './PatientBio';


const diagnosisCard = (props) => {
	let cardBody;
	if (props.type == 'header') {
		cardBody =  <div>
						<DiagnosisCardHeader firstName={props.firstName} lastName={props.lastName}/>
 						<PatientBio age={props.age} diagnosis={props.diagnosis}/>
 					</div>;
	}
	if (props.type == 'therapy') {
		cardBody =  <div>
						<p className={classes.CardTitle}>Initial Therapy</p>
 					</div>;
	}
	else if (props.type == 'response') {
		cardBody =  <div>
						<p className={classes.CardTitle}>Response</p>
					</div>;
	}
	else if (props.type == 'evaluation') {
		cardBody = <div>
						<p className={classes.CardTitle}>Evaluation</p>
				   </div>;
	}
	return (
		<div className={classes.DiagnosisCard} onClick={props.onClick}>
			<Card>
				<CardContent>
						{cardBody}
				</CardContent>
			</Card>
		</div>
	);
};
	
export default diagnosisCard