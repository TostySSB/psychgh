import React, {Component} from 'react';
import classes from './DiagnosisCard.css';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import DiagnosisCardHeader from './DiagnosisCardHeader';
import PatientBio from './PatientBio';

const styles = {
	width: '25%',
	margin: 'auto',
	marginTop: '10px',
	horizontalAlign: 'center'
};

const diagnosisCard = (props) => {
	let cardBody;
	if (props.firstName != null) {
		cardBody =  <div>
						<DiagnosisCardHeader firstName={props.firstName} lastName={props.lastName}/>
 						<PatientBio age={props.age} diagnosis={props.diagnosis}/>
 					</div>;
	}
	else {
		cardBody =  <div>
						<p>{props.type}</p>
						<p>More Content Will Go Here.</p>
					</div>
	}
	return (
		<div className={classes.DiagnosisCard}>
			<Card style={styles}>
				<CardContent>
						{cardBody}
				</CardContent>
			</Card>
		</div>
	);
};
	
export default diagnosisCard