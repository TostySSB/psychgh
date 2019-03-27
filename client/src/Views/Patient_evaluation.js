import React, { Component } from 'react';

// This Page displays an evaluation test to a patient

// Creates an instance of the form specified from the DB and serves it to the patient

// Handle creation of a report based on this form once it is finished on the server side and store in the DB under the patient's results

// Redirect the patient to that new results page with option to notify their practitioner

class Patient_evaluation extends Component{
    render(){
        return(
            <div className="Patient_evaluation">
                
            </div>
        );
    }
}
export default Patient_evaluation;

/*Currently working on:
	-Making an abstract component for creating forms for patient evaluation tests

	WILL NEED (in form): PHQ maker
		-Tables that contain rows/columns of 'components'
		-Text input boxes
		-grouped check boxes (can only select from one of X check boxes)
		-check boxes (multiple choice)
		-Date input
		-requirement flag for all above (marked with red asterisks

	General document creator/editor for medication details (effects, studies, stats)/*