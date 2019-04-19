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
		this.cardModal = <div></div>
		this.state = {
			newExploration: false,
			userID: 1007,
			patient: {
				evals: []
			},
			addingCard: false,
			showModal: false
		};
	}

	componentWillMount() {
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
				this.setState({"patient": res.data});
			}
		});
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


  	makeModal = (type) => {
  		let cardModal;
		if (type == "therapy") {
			cardModal = 
			<CardModal 
				show={this.state.showModal}
			   	modalClosed={this.cancelNewCardHandler}
			   	type={this.cardType}
			   	idNum={this.idNum}
			   	evalData={this.evalData}
			   	updateEvals ={this.updateEvals.bind(this)}
			/>
		}
		else if (type == "response") {
			cardModal =
			<CardModal 
				show={this.state.showModal}
			   	modalClosed={this.cancelNewCardHandler}
			   	type={this.cardType}
			   	idNum={this.idNum}
			   	evalData={this.evalData}
			   	updateEvals ={this.updateEvals.bind(this)}
			/>
		}
		else if (type == "evaluation") {

		}
		return cardModal;
  	}

  	
  	cancelNewCardHandler = () => {
  		this.setState({addingCard: false});
  		this.setState({showModal: false});
  	}


  	cardClickHandler = (type, idNum) => {
  		this.cardType = type;
  		this.idNum = idNum;
  		console.log(idNum);
  		// Get the right eval data
  		let evals = this.state.patient.evals;
  		let index;
  		console.log(evals.length);
  		for (let i = 0; i < evals.length; i++) {
  			console.log(evals[i].id);
  			if (evals[i].id == idNum) {
  				index = i;
  				break;
  			}
  		}

  		this.evalData = evals[index];

  		this.makeModal(type);


  		this.setState({showModal: true});
  	}


  	updateEvals = (evalData) => {
		let newData = {
			userID: this.state.userID,
			newEval: {
				id: evalData.id,
				type: evalData.type
			}
		};

		Object.keys(evalData.evalData).map((key) => {
  			newData.newEval[key] = evalData.evalData[key];
  		});
		console.log("new data:");
		console.log(newData);
  		axios.post('api/explorations/updateExploration', newData)
  		.then(res => {
  			console.log(res);
  		});

  	}

  	addNewEval = (evalData) => {
  		console.log(evalData);
  	}
  
  	render() {
  		let cardModal = this.makeModal(this.cardType);
		if (this.state.newExploration) {
			return (
				<button onClick={this.getPatientExploration.bind(this, {"userID":this.state.userID})}>Click.</button>
  			);
		}
		else if (this.state.patient.evals.length > 0) {
			return(
				<div>
					{cardModal}
					<DiagnosisCard
						type='header' 
						firstName={this.state.patient.firstName}
						lastName={this.state.patient.lastName}
					/>
					{this.state.patient.evals.map(ev => (
							<DiagnosisCard
								type={ev.type}
								idNum={ev.id}
								onClick={this.cardClickHandler.bind(this, ev.type, ev.id)}
								evalData={ev}
							/>))
					}
				</div>
			);
		}		
		else {
			return(
				<div>
					<CardModal 
						show={this.state.showModal}
					   	modalClosed={this.cancelNewCardHandler}
					   	type={this.cardType}
					   	idNum={this.idNum}
					   	evalData={this.evalData}
					   	updateEvals ={this.updateEvals.bind(this)}
					/>
					<DiagnosisCard 
						type='header' 
						firstName={this.state.patient.firstName}
						lastName={this.state.patient.lastName}
					/>
					<p>No Evaluations yet.</p>
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