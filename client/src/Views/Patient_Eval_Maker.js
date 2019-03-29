import React, { Component } from "react";
import FormBuilder, {formBuilder} from "react-form-builder2";

class Patient_Eval_Maker extends React.Component{
    

  
  render(){


    var items = [{
      key: 'Header',
      name: 'Header Text',
      icon: 'fa fa-header',
      static: true,
      content: 'Placeholder Text...'
    },
    {
      key: 'Paragraph',
      name: 'Paragraph',
      static: true,
      icon: 'fa fa-paragraph',
      content: 'Placeholder Text...'
    }];

    return(
        
        <div className="Patient_Eval_Maker">
          <FormBuilder.ReactFormBuilder
            url='path/to/GET/initial.json'
            
            saveUrl='path/to/POST/build/form.json'/>,
          document.body
        </div>
    );
  }
}
export default Patient_Eval_Maker;


/*Currently working on:
	-Making an abstract component for creating forms for patient evaluation tests

// 	WILL NEED (in form): PHQ maker
// 		-Tables that contain rows/columns of 'components'
// 		-Text input boxes
// 		-grouped check boxes (can only select from one of X check boxes)
// 		-check boxes (multiple choice)
// 		-Date input
// 		-requirement flag for all above (marked with red asterisks

// 	General document creator/editor for medication details (effects, studies, stats)*/