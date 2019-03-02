import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import DiagnosisChart from '../DiagnosisChart.js'

test('it renders without crashing', () => {
	const dc = document.createElement('DiagnosisChart');
	ReactDOM.render(dc);
});