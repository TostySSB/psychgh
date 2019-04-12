import React, {Component} from 'react';
import './DiagnosisChart.css';
import PropTypes from "prop-types";
import DiagnosisCard from '../components/UI/cards/DiagnosisCard';
import NewDiagnosisChart from '../components/UI/cards/NewDiagnosisChart';
import DiagnosisControls from '../components/DiagnosisControls/DiagnosisControls';
import CardModal from '../components/UI/Modals/CardModal';
import { connect } from "react-redux";
//import '../components/UI/cards/ExplorationCard.js';

class DiagnosisChart extends Component {
	constructor(props) {
		super(props);
		let updateEvals = this.updateEvals.bind(this);
		this.state = {
			newExploration: false,
			firstName: "Henry",
			lastName: "Soule",
			age: 30,
			diagnosis: 'Crazy',
			patients: undefined,
			evals: [
				{type: 'therapy'},
				{type: 'response'},
				{type: 'evaluation'}
			],
			errors: {},
			addingCard: false,
			editingCard: false
		};
		this.cardType = "";
	}

	componentWillMount(){
		fetch('api/getPatients', {
			method: 'GET',
		}).then(res =>{
			this.setState({
				patients: res
			})
		})
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


	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
    	});
  	}

  	renderNewPatient = () => {
  		console.log(window.location.pathname);
  	}

  	addCardHandler = () => {
  		//Update Eval
  		//Will need to render modal first
  		this.setState({addingCard: true});
  	}

  	cancelNewCardHandler = () => {
  		this.setState({addingCard: false});
  		this.setState({editingCard: false});
  	}


  	cardClickHandler = (type) => {
  		this.cardType = type;
  		this.setState({editingCard: true});
  	}

  	updateEvals = (evalData) => {

  	}

	render() {
		if (this.state.newExploration) {
			return (
				<NewDiagnosisChart />
  			);
		}
		else {

			return(
				<div>
					<CardModal 
						show={this.state.editingCard}
					   	modalClosed={this.cancelNewCardHandler}
					   	type={this.cardType}
					   	updateEvals ={this.updateEvals.bind(this)}
					   	
					/>
					<DiagnosisCard 
						type='header' 
						firstName={this.state.firstName}
						lastName={this.state.lastName}
						onClick={this.cardClickHandler}
					/>
					{this.state.evals.map(ev => (
						<DiagnosisCard type={ev.type} onClick={this.cardClickHandler.bind(this, ev.type)} />
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