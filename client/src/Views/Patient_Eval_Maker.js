import React, { Component } from 'react';

// TODO: Make components for evaulation creator (with editable feilds, then export them to json formatt for the database)
// TODO: Add drag and drop as well as ADD/ REMOVE functionality for each component
// TODO: Export finish evaluation to database

class Patient_Eval_Maker extends Component{
    
    render(){
        return(
            
            <div className="Patient_Eval_Maker">
                <div id="gjs">
                    <h1>Hello World Component!</h1>
                    <script type="text/javascript">
                    </script>
                </div>
            </div>
            
        );
    }
}
export default Patient_Eval_Maker;

/*Currently working on:
	-Making an abstract component for creating forms for patient evaluation tests

	WILL NEED (in form): PHQ maker
		-Tables that contain rows/columns of 'components'
		-Text input boxes
		-grouped check boxes (can only select from one of X check boxes)
		-check boxes (multiple choice)
		-Date input
		-requirement flag for all above (marked with red asterisks

	General document creator/editor for medication details (effects, studies, stats)*/