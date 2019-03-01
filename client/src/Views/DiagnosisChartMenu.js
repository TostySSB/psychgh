import React, {Component} from 'react';
import PropTypes from 'prop-types';
const mongoose = require('mongoose');

class DiagnosisChartMenu extends Component {

	render() {
		return (
			<form>
				<label>
					First Name:
				</label>
				<input type='text' />
				
				<label>
					Last Name:
				</label>
				<input type='text' />
			</form>
		);
	}
}