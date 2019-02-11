import React, {Component} from 'react';
import './DiagnosisChart.css';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

class DiagnosisChart extends Component {
	state = {
		spacing: '16',
	};

	render() {
		const {classes} = this.props;
		const {spacing} = this.state;
		console.log(this.props);
		return (
			<div className='DiagnosisChart'>
				<Grid justify='center' container spacing={24}>
					<Grid item xs={12}>
						<Paper>
							<h2>Diagnosis of Depression</h2>
						</Paper>
					</Grid>
					<Grid item xs={4}>
						<Paper>
							<p>Initial therapy with citalopram or sertaline (unless compelling indication for alternate agent).</p>
							<p>Address side effects and encourage adherence in 1 week. Evaluate response in 3-4 weeks.</p>
						</Paper>
					</Grid>
				</Grid>

				<Grid justify='center' container spacing={24}>
					<Grid item xs={4}>
						<Paper>
							Item 1.
						</Paper>	
					</Grid>
					
					<Grid item xs={4}>
						<Paper>
							Item 2.
						</Paper>
					</Grid>

					<Grid item xs={4}>
						<Paper>
							Item 3. 
						</Paper>
					</Grid>
				</Grid>

			</div>
		);
	}
}


export default DiagnosisChart;