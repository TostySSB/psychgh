import React, {Component} from 'react';
import './DiagnosisChart.css';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

class DiagnosisChart extends Component {
	state = {
		spacing: '16',
		list: []
	}
	// Call to 
	getList = () => {
	    fetch('/api/getList')
	    .then(res => res.json())
	    .then(function(myJson) {
	    	console.log(JSON.stringify(myJson));
	    })
	}

 	
	render() {
		const {classes} = this.props;
		const {spacing} = this.state;
		return (
			<div className='DiagnosisChart'>
				<Grid justify='center' container spacing={24}>
					<Grid justify='center' container spacing={24}>
						<Grid item xs={12} onClick={this.getList}>
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
								<h4>Non Response</h4>
								<p>Ensure medication adherence.</p>
								<p>Optimize dose <strong>OR</strong> switch (alternate SSRI or non-SSRI)</p>
							</Paper>	
						</Grid>
						
						<Grid item xs={4}>
							<Paper>
								<h4>Partial Response</h4>
								<p>Optimize dose <strong>OR</strong> augment</p>
							</Paper>
						</Grid>

						<Grid item xs={4}>
							<Paper>
								<h4>Full Response</h4>
								<p>Continue same treatment for at least 4-9 months</p>
							</Paper>
						</Grid>
					</Grid>

					<Grid container spacing={24}>
						<Grid item xs={4}>
							<Paper>
								<p>Evaluate response in 3-4 weeks.</p>
							</Paper>
						</Grid>

						<Grid item xs={4}>
							<Paper>
								<p>Evaluate response in 3-4 weeks.</p>
							</Paper>
						</Grid>
					</Grid>

					<Grid container spacing={24}>
						<Grid item xs={4}>
							<Paper>
								<h4>Non Response</h4>
								<p>Switch to a different antidepressant</p>
								<p>(SSRI or non-SSRI)</p>
							</Paper>
						</Grid>
						
						<Grid item xs={4}>
							<Paper>
								<h4>Partial Response</h4>
								<p>Optimize dose <strong>OR</strong> augment <strong>OR</strong></p>
							</Paper>
						</Grid>

						<Grid item xs={4}>
							<Paper>
								<h4>Full Response</h4>
								<p>Continue same treatment for at least 4-9 months</p>
							</Paper>
						</Grid>
					</Grid>

					<Grid container spacing={24}>
						<Grid item xs={4}>
							<Paper>
								<h4>Non Response</h4>
								<p>Switch to a different antidepressant</p>
								<p>(alternate SSRI or non-SSRI)</p>
							</Paper>
						</Grid>
						
						<Grid item xs={4}>
							<Paper>
								<h4>Partial Response</h4>
								<p>Optimize does <strong>OR</strong> augment <strong>OR</strong> switch</p>
							</Paper>
						</Grid>

						<Grid item xs={4}>
							<Paper>
								<h4>Full Response</h4>
								<p>Continue same treatment for at least 4-9 months</p>
							</Paper>
						</Grid>
					</Grid>
				</Grid>
			</div>
		);
	}
}


export default DiagnosisChart;