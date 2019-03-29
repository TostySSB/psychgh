// import React, { Component } from "react";
// //import CSVDownloader from "./CSVDownloader";
// // //import XLSDownloader from "./XLSDownloader";
// // import URLDisplay from "./URLDisplay";
// //import {getFormID, getFormURL} from "../utils/utils";
// import {DropdownButton, MenuItem}  from "react-bootstrap";

// // TODO: Make components for evaulation creator (with editable feilds, then export them to json formatt for the database)
// // TODO: Add drag and drop as well as ADD/ REMOVE functionality for each component
// // TODO: Export finish evaluation to database

// export default class PractitionerView extends Component {
//     componentDidMount() {
//       const adminToken = this.props.params.adminToken;
//       //this.formID = getFormID(adminToken);
//       this.props.getRecords(adminToken);
//       this.props.loadSchema(this.formID);
//     }

//     /**
//      * <!-- 
//                 <CSVDownloader
//                   schema={this.props.schema}
//                   fields={schemaFields}
//                   records={this.props.records} />
//                   -->

//                   <XLSDownloader
//                   schema={this.props.schema}
//                   fields={schemaFields}
//                   records={this.props.records} />

//                   these where in the li feilds in render's 'if read()'


//                   <URLDisplay url={formUrl} /> was after the drop down button feild
//      */
//     render() {
//         const properties = this.props.schema.properties;
//         const title = this.props.schema.title;
//         const ready = Object.keys(properties).length !== 0;
//         const schemaFields = this.props.uiSchema["ui:order"];
//         //const formUrl = getFormURL(this.formID);
    
//         let content = "loading";
//         if (ready) {
//           content = (
//           <div>
//             <h3>Results for {title}</h3>
//             <DropdownButton title="Download results" id="bg-nested-dropdown" className="pull-right">
//               <li>
                
//               </li>
//               <li>
                
//               </li>
//             </DropdownButton>
            
//             <table className="table table-striped">
//             <thead>
//               <tr>{
//                 schemaFields.map((key) => {
//                   return <th key={key}>{properties[key].title}</th>;
//                 })
//               }</tr>
//             </thead>
//             <tbody>
//             {this.props.records.map((record, idx) => {
//               return (<tr key={idx}>{
//                 schemaFields.map((key) => {
//                   return <td key={key}>{String(record[key])}</td>;
//                 }
//               )}
//               </tr>);
//             })}
//             </tbody>
//             </table>
//           </div>);
//         }
//         return <div className="test">{content}</div>;
//       }
//     }
// // class Patient_Eval_Maker extends Component{
    
// //     render(){
// //         return(
            
// //             <div className="Patient_Eval_Maker">
// //                 <div id="gjs">
// //                     <h1>Hello World Component!</h1>
// //                     <script type="text/javascript">
// //                     </script>
// //                 </div>
// //             </div>
            
// //         );
// //     }
// // }
// // export default Patient_Eval_Maker;

// /*Currently working on:
// 	-Making an abstract component for creating forms for patient evaluation tests

// 	WILL NEED (in form): PHQ maker
// 		-Tables that contain rows/columns of 'components'
// 		-Text input boxes
// 		-grouped check boxes (can only select from one of X check boxes)
// 		-check boxes (multiple choice)
// 		-Date input
// 		-requirement flag for all above (marked with red asterisks

// 	General document creator/editor for medication details (effects, studies, stats)*/