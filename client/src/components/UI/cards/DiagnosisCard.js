import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import DiagnosisCardHeader from './DiagnosisCardHeader';


class DiagnosisCard extends Component {
	constructor() {
		super();
		this.state = {
			firstName: "Test",
			lastName: "Patient",
			patients: undefined,
			errors: {}
		}
	}

	render() {
		return (
			<Card>
				<CardContent>
					<DiagnosisCardHeader firstName={this.state.firstName} lastName={this.state.lastName}/>
					
				</CardContent>
			</Card>
		);
	}
}

export default DiagnosisCard