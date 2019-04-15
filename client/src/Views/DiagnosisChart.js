import React, {Component} from 'react';
import axios from "axios";
import './DiagnosisChart.css';
import PropTypes from "prop-types";
import DiagnosisCard from '../components/UI/cards/DiagnosisCard';
import NewDiagnosisChart from '../components/UI/cards/NewDiagnosisChart';
import DiagnosisControls from '../components/DiagnosisControls/DiagnosisControls';
import CardModal from '../components/UI/Modals/CardModal';
import { connect } from "react-redux";

class DiagnosisChart extends Component {
	constructor(props) {
		super(props);
		let updateEvals = this.updateEvals.bind(this);
		this.evals = [
				{id: 1, type: 'therapy', data: {}},
				{id: 2, type: 'response', data: {}},
				{id: 3, type: 'evaluation', data: {}}
			];
		this.state = {
			newExploration: false,
			userID: 1007,
			patient: {}
			// firstName: "Henry",
			// lastName: "Soule",
			// age: 30,
			// diagnosis: 'Crazy',
			// patients: undefined,
			// evals: this.evals,
			// errors: {},
			// addingCard: false,
			// editingCard: false
		};
	}

	componentWillMount() {
		axios.get('api/explorations/getExploration', {params: {"userID": this.state.userID}})
		.then(res => {
			if (res.status === 200) {
				// console.log(res);
				this.setState({"patient": res.data});
				console.log(this.state);
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
		axios.get('api/explorations/getExploration', {params: data});
		// .then(res => {
		// 	if (res.status === 200) {
		// 		console.log(res);
		// 	}
		// });
	}

	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
    	});
  	}

  	renderNewPatient = () => {
  		console.log(window.location.pathname);
  	}

  	addCardHandler = () => {
  		this.setState({addingCard: true});
  	}

  	cancelNewCardHandler = () => {
  		this.setState({addingCard: false});
  		this.setState({editingCard: false});
  	}


  	cardClickHandler = (type, idNum) => {
  		this.cardType = type;
  		this.idNum = idNum;
  		this.setState({editingCard: true});
  	}

  	submitEvalData = () => {
  		
  	}

  	updateEvals = (evalData) => {
  		console.log(evalData);
  		let index;
  		//Find the right eval
  		//Then update it. Jank, I know
  		for (let i = 0; i < this.evals.length; i++) {
  			if (this.evals[i].id === evalData.id) {
  				index = i;
  				break;
  			}
  		}
		let newData = {
			id: evalData.id,
			type: evalData.type,
			data: evalData.evalData
		};
		this.evals[index] = newData;
		console.log(this.evals);
		this.setState({evals: this.evals});

  	}

  	addNewEval = (evalData) => {
  		console.log(evalData);
  	}
  
  	render() {
		if (this.state.newExploration) {
			return (
				
				<button onClick={this.getPatientExploration.bind(this, {"userID":this.state.userID})}>Click.</button>
  			);
		}
		else {
			return(
				<div>
					<CardModal 
						show={this.state.editingCard}
					   	modalClosed={this.cancelNewCardHandler}
					   	type={this.cardType}
					   	idNum={this.idNum}
					   	updateEvals ={this.updateEvals.bind(this)}
					   	
					/>
					<DiagnosisCard 
						type='header' 
						firstName={this.state.patient.firstName}
						lastName={this.state.patient.lastName}
					/>
					{this.evals.map(ev => (
						<DiagnosisCard
							type={ev.type}
							idNum={ev.id}
							onClick={this.cardClickHandler.bind(this, ev.type, ev.id)}
							evalData={ev}
						/>
					))}
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
  
  export default connect(
	mapStateToProps,
  )(DiagnosisChart);