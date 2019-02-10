import React, {Component} from 'react';
import Input from '../components/UI/Input'

class DiagnosisChart extends Component {
	render() {
		return (
		<form>
			<label>
				Is at least one of the first two questions a 2 or a 3?
			</label>
			Yes: <input type='checkbox' value='Yes' />
			No: <input type='checkbox' value='No' />
			
			<label>
				Calculate Symptom Count:	
			</label>
			<label>
				Number of time the patient rates a 2 or 3 for questions 1-8:
			</label>
			<input type='text' />

		</form>
		)
	}
}

export default DiagnosisChart;