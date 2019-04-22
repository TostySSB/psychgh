import React, {Component} from 'react';
import axios from "axios";
import classes from './DiagnosisChart.css';
import '../components/UI/cards/DiagnosisCard.css';
import PropTypes from "prop-types";
import MUIDataTable from "mui-datatables";
import PatientDialog from "../components/UI/dialogs/PatientDialog";
import DiagnosisCard from '../components/UI/cards/DiagnosisCard';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Button from '@material-ui/core/Button';
import NewDiagnosisChart from '../components/UI/cards/NewDiagnosisChart';
import DiagnosisControls from '../components/DiagnosisControls/DiagnosisControls';
import CardModal from '../components/UI/Modals/CardModal';
import TherapyModal from '../components/UI/Modals/TherapyModal';
import ResponseModal from '../components/UI/Modals/ResponseModal';
import EvaluationModal from '../components/UI/Modals/EvaluationModal';
import { connect } from "react-redux";

const columns = [
    {
        name: "user_id",
        label: "User ID",
        options: {
         filter: false,
         sort: false,
        }
       },
    {
        name: "lastName",
        label: "Last Name",
        options: {
         filter: false,
         sort: false,
        }
       },
       {
        name: "firstName",
        label: "First Name",
        options: {
         filter: false,
         sort: false,
        }
       }
];

export default class DiagnosisChart extends Component {
	constructor(props) {
		super(props);
		this.evalData = {};
		this.idNum = 0;
		this.state = {
			newExploration: false,
			users: [],
			chartSelected: false,
			currentIdNum: 0,
			currentEvalData: {},
			userID: 0,
			patient: {
				evals: []
			},
			addingCard: false,
			showTherapyModal: false,
			showResponseModal: false,
			showEvalModal: false
		};
	}

	componentWillMount() {
		axios.get('/api/users/userList')
		.then(res => { 
			this.setState({users: res.data});
		});

	}


	getPatientExploration = () => {
		axios.get('api/explorations/getExploration', {params: {"userID": this.state.userID}})
		.then(res => {
			if (res.status === 200) {
				console.log("Res:");
				console.log(res.data);
				this.setState({patient: res.data});
			}
		});
	}

	handleSubmit = event => {
		event.preventDefault();
		const userData = {
			firstName: this.state.firstName,
			lastName: this.state.lastName
		  };
	  
		fetch('api/submitExploration', {
			method: 'POST',
			body: JSON.stringify(userData),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(res => {
			if (res.status === 200) {
				alert('Submission successful, ' + this.state.firstName + ' has been added to the database');
				this.setState({
					firstName: "",
					lastName: ""
					});
			}
			else {
				const error = new Error(res.error);
				throw error;
			}
		}).catch(err => {
			console.log(err);
			alert('Submission failed. Please try again.');
		});
	}

	getPatientExploration = (data) => {
		axios.get('api/explorations/getExploration', {params: data})
		.then(res => {
			if (res.status === 200) {
				console.log("RES: ");
				console.log(res.data);
				this.setState({patient: res.data});
				this.setState({userID: res.data.user_id});
			}
		});
		console.log(this.state);
	}

	
	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
    	});
  	}

  	handleEvalChange = event => {
  		let currentEval = this.state.currentEvalData;
  		console.log("Pre-update state eval:");
  		console.log(this.state.currentEvalData);
  		currentEval[event.target.name] = event.target.value;
  		this.setState({currentEvalData: currentEval});
  	}

  	
  	renderNewPatient = () => {
  		console.log(window.location.pathname);
  	}

  	
  	addCardHandler = () => {
  		this.setState({addingCard: true});
  	}


  	renderPatientChart = (event) => {
  		console.log("Patient rendered");
  	}
 

  	makeModal = (type, evalData) => {
  		//TODO: pass id num??
  		let cardModal;
		if (type == "therapy") {
			cardModal = 
				<CardModal 
					show={this.state.showModal}
				   	modalClosed={this.cancelNewCardHandler}
				   	type={type}
				   	idNum={this.idNum}
				   	evalData={evalData}
				   	updateEvals ={this.updateEvals.bind(this)}
				/>
		}
		else if (type == "response") {
			cardModal =
				<CardModal 
					show={this.state.showModal}
				   	modalClosed={this.cancelNewCardHandler}
				   	type={type}
				   	idNum={this.idNum}
				   	evalData={evalData}
				   	updateEvals ={this.updateEvals.bind(this)}
				/>
		}
		else if (type == "evaluation") {

		}
		return cardModal
  	}

  	
  	nextEvalHandler = (type) => {
  		this.setState({newExploration: true})
  		//Render correct type of modal
  		//based on type of modal we currently have rendered
  		console.log(type);
  		if (type == "therapy") {
  			// Render a response
  			this.setState({showTherapyModal: false});
  			this.setState({showResponseModal: true});
  		}
  		else if (type == "response") {
  			// Render an eval
  			this.setState({showResponseModal: false});
  			this.setState({showEvalModal: true});
  		}
  		else if (type == "evaluation") {
  			// Render a response
  			this.setState({showEvalModal: false});
  			this.setState({showResponseModal: true});
  		}
  		this.state.currentEvalData = {};
  		this.setState({currentIdNum: this.state.currentIdNum + 1});
  	}

  	firstCardHandler = () => {
  		this.setState({newExploration: true});
  		this.setState({currentIdNum: 0});
  		this.setState({showTherapyModal: true});
  	}

  	cardClickHandler = (type, idNum) => {
  		this.setState({newExploration: false});
  		this.cardType = type;
  		// this.idNum = idNum;
  		this.setState({currentIdNum: idNum});
  		// Get the right eval data
  		let evals = this.state.patient.evals;
  		let index;
  		for (let i = 0; i < evals.length; i++) {
  			console.log(evals[i].id);
  			if (evals[i].id == idNum) {
  				index = i;
  				break;
  			}
  		}

  		this.setState({currentEvalData: evals[index]});
  		
  		if (type == "therapy")
  			this.setState({showTherapyModal: true});
  		else if (type == "response")
  			this.setState({showResponseModal: true});
  		else if (type == "evaluation")
  			this.setState({showEvalModal: true});
  	}


  	cancelNewCardHandler = (type) => {
  		this.setState({addingCard: false});
  		if (type == "therapy")
  			this.setState({showTherapyModal: false});
  		else if (type == "response")
  			this.setState({showResponseModal: false});
  		else if (type == "evaluation")
  			this.setState({showEvalModal: false});
  	}

  	// Submit a new evaluation to the database
  	submitEval = (type) => {
  		//Prepare new data
  		let newData = {
			userID: this.state.userID,
			newEval: {
				id: this.state.currentIdNum,
				type: type
			}
		};
		// Create key-value pairs of the current eval in state
		// For the data we'll send to the database
		Object.keys(this.state.currentEvalData).map((key) => {
  			newData.newEval[key] = this.state.currentEvalData[key];
  		});
  		axios.post('api/explorations/newExploration', newData);
  		//Close the modal
  		if (type === "therapy") {
  			this.setState({showTherapyModal: false});
  		}
  		else if (type === "evaluation") {
  			this.setState({showEvalModal: false});
  		}
  		else if (type === "response") {
  			this.setState({showResponseModal: false});
  		}
  	}

  	// Update an existing evaluation in the database
  	updateEvals = () => {
  		// TODO: OVERWRITE OLD RESPONSE DATA
  		console.log(this.state.currentEvalData);
		let newData = {
			userID: this.state.userID,
			newEval: {
				id: this.state.currentEvalData.id,
				type: this.state.currentEvalData.type
			}
		};

		Object.keys(this.state.currentEvalData).map((key) => {
  			newData.newEval[key] = this.state.currentEvalData[key];
  		});
		console.log("new data:");
		console.log(newData);
  		axios.post('api/explorations/updateExploration', newData)
  		.then(res => {
  			console.log(res);
  		});
  		//Close the modal
  		console.log("TYPE:" + this.state.currentEvalData.type);
  		if (this.state.currentEvalData.type === "therapy") {
  			this.setState({showTherapyModal: false});
  		}
  		else if (this.state.currentEvalData.type === "evaluation") {
  			this.setState({showEvalModal: false});
  		}
  		else if (this.state.currentEvalData.type === "response") {
  			this.setState({showResponseModal: false});
  		}

  	}
  
  	render() {
  		const centerStyles = {
  			marginLeft: "auto",
  			marginRight: "auto",
  			marginBottom: "10px",
  			width: "75%"
  		};

  		const centerStylesTwo = {
  			margin: "auto",
  			width: "25%"
  		};

  		const cardStyles = {
			marginLeft: "auto",
  			marginRight: "auto",
  			marginBottom: "10px",
  			width: "25%",
			maxWidth: "320px"
		};

  		const options = {
		    filterType: 'checkbox',
		    selectableRows: false,
		    print: false,
		    download: false,
		    filter: false,
		    expandableRows: true,
		    renderExpandableRow: (rowData, rowMeta) => {
		        const colSpan = rowData.length + 1;
		        return (
		          <TableRow>
		            <TableCell colSpan={colSpan}>
		            {rowData[0]}
		            </TableCell>
		            <PatientDialog userID={rowData[0]}></PatientDialog>
		          </TableRow>
		          
		        );
		      },
		      onRowClick: (rowData) => { 
		      	console.log(rowData);
		      	this.setState({chartSelected: true});
		      	this.getPatientExploration(rowData[0]);
		      }
  			};


		if (this.state.chartSelected && this.state.patient.evals.length > 0) {
			return(
				<div>
					<TherapyModal 
						show={this.state.showTherapyModal}
						evalData={this.state.currentEvalData}
						idNum={this.state.currentIdNum}
						nextEvalHandler={this.nextEvalHandler}
						type={"therapy"}
						updateEvals ={this.updateEvals.bind(this)}
						submitEval={this.submitEval}
						handleEvalChange={this.handleEvalChange}
						newExploration={this.state.newExploration}
						modalClosed={this.cancelNewCardHandler.bind(this, "therapy")}
					/>

					<ResponseModal 
						show={this.state.showResponseModal} 
						evalData={this.state.currentEvalData}
						idNum={this.state.currentIdNum}
						nextEvalHandler={this.nextEvalHandler}
						type="response"
						updateEvals ={this.updateEvals.bind(this)}
						submitEval={this.submitEval}
						handleEvalChange={this.handleEvalChange}
						newExploration={this.state.newExploration}
						modalClosed={this.cancelNewCardHandler.bind(this, "response")}
					/>

					<EvaluationModal
						show={this.state.showEvalModal}
						evalData={this.state.currentEvalData}
						idNum={this.state.currentIdNum}
						nextEvalHandler={this.nextEvalHandler}
						type="evaluation"
						updateEvals ={this.updateEvals.bind(this)}
						submitEval={this.submitEval}
						handleEvalChange={this.handleEvalChange}
						newExploration={this.state.newExploration}
						modalClosed={this.cancelNewCardHandler.bind(this, "evaluation")}
					/>
					<h4 style={centerStyles}>Diagnosis Chart</h4>
					<p style={centerStyles}>Click an evaluation card below to edit the evaluation.</p>
					<DiagnosisCard
						style={cardStyles}
						type='header' 
						firstName={this.state.patient.firstName}
						lastName={this.state.patient.lastName}
					/>

					{this.state.patient.evals.map(ev => (
							<DiagnosisCard
								style={cardStyles}
								type={ev.type}
								idNum={ev.id}
								onClick={this.cardClickHandler.bind(this, ev.type, ev.id)}
								evalData={ev}
							/>))
					}
				</div>
			);
		}
		else if (this.state.chartSelected && this.state.patient.evals.length == 0) {
			return (
				<div>
				<TherapyModal 
						show={this.state.showTherapyModal}
						evalData={this.state.currentEvalData}
						idNum={this.state.currentIdNum}
						nextEvalHandler={this.nextEvalHandler}
						type={"therapy"}
						updateEvals ={this.updateEvals.bind(this)}
						submitEval={this.submitEval}
						handleEvalChange={this.handleEvalChange}
						newExploration={this.state.newExploration}
						modalClosed={this.cancelNewCardHandler.bind(this, "therapy")}
					/>

					<ResponseModal 
						show={this.state.showResponseModal} 
						evalData={this.state.currentEvalData}
						idNum={this.state.currentIdNum}
						nextEvalHandler={this.nextEvalHandler}
						type="response"
						updateEvals ={this.updateEvals.bind(this)}
						submitEval={this.submitEval}
						handleEvalChange={this.handleEvalChange}
						newExploration={this.state.newExploration}
						modalClosed={this.cancelNewCardHandler.bind(this, "response")}
					/>

					<EvaluationModal
						show={this.state.showEvalModal}
						evalData={this.state.currentEvalData}
						idNum={this.state.currentIdNum}
						nextEvalHandler={this.nextEvalHandler}
						type="evaluation"
						updateEvals ={this.updateEvals.bind(this)}
						submitEval={this.submitEval}
						handleEvalChange={this.handleEvalChange}
						newExploration={this.state.newExploration}
						modalClosed={this.cancelNewCardHandler.bind(this, "evaluation")}
					/>

					<DiagnosisCard
						type='header' 
						style={cardStyles}
						firstName={this.state.patient.firstName}
						lastName={this.state.patient.lastName}
					/>
					<div style={centerStylesTwo}>
						<h5>Diagnosis Chart not started yet.</h5>
						<Button color="primary" variant="contained" onClick={this.firstCardHandler}>
							Click here to start {this.state.patient.firstName}'s Chart
						</Button>
					</div>
				</div>
			);
		}		
		else {
			return(
				<div>
					<h4 style={centerStyles}>Diagnosis Chart</h4>
					<p style={centerStyles}>Select a patient for the menu below to view and edit their Diagnosis Chart.</p>
					
						<div className={classes.root} style={centerStyles}>
			                <MUIDataTable
			                    title={"Patients"}
			                    data={this.state.users}
			                    columns={columns}
			                    options={options}
			                    onRowClick={this.renderPatientChart}
			                />
		            	</div>
	            	
            	</div>
			);
		}
	}
}
	

DiagnosisChart.propTypes = {
	firstName: PropTypes.object.isRequired,
	lastName: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
	firstName: state.firstName,
	lastName: state.lastName
  });