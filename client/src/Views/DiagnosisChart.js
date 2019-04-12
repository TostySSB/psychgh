import React, {Component} from 'react';
import './DiagnosisChart.css';
import PropTypes from "prop-types";
import DiagnosisCard from '../components/UI/cards/DiagnosisCard';
import DiagnosisControls from '../components/DiagnosisControls/DiagnosisControls';
import NewEvalModal from '../components/UI/Modals/NewEvalModal';
import { connect } from "react-redux";
//import '../components/UI/cards/ExplorationCard.js';

class DiagnosisChart extends Component {
	constructor() {
		super();
		this.state = {
			newExploration: false,
			firstName: "Henry",
			lastName: "Soule",
			age: 30,
			diagnosis: 'Crazy',
			patients: undefined,
			evals: [
				{type: 'Some Type'},
				{type: 'Some other type'}
			],
			errors: {},
			addingCard: false
		};
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
  	}

  	addNewCard = () => {

  	}
 	
	render() {
		if (this.state.newExploration) {
			return (
  			<div className='DiagnosisChart'>
				<h1>New Diagnosis Exploration</h1>
				<p>Enter the patients name below to start a new diagnosis exploration.</p>
			  <div style={{ marginTop: "4rem" }} className="row">
				<div className="col s8 offset-s2">
				  <form noValidate onSubmit={this.handleSubmit}>
					<div className="input-field col s12">
						<input 
							onChange={this.handleChange}
							value={this.state.firstName}
							id="firstName" 
							type="text"/>
						<label htmlFor="firstName">First Name</label>
					</div>
					<div className="input-field col s12">
						<input 
							onChange={this.handleChange}
							value={this.state.lastName}
							id="lastName" 
							type="text"/>
						<label htmlFor="lastName">Last Name</label>
					</div>
					<div className="col s12" style={{ paddingLeft: "11.250px" }}>
					  <button
						style={{
						  width: "200px",
						  borderRadius: "3px",
						  letterSpacing: "1.5px",
						  marginTop: "1rem"
						}}
						type="submit"
						className="btn btn-large waves-effect waves-light hoverable blue accent-3"
					  >
						Create Patient
					  </button>
					</div>
				  </form>
				</div>
			  </div>
			</div>
  		);
		}
		else {
			return(
				<div>
					<NewEvalModal show={this.state.addingCard} modalClosed={this.cancelNewCardHandler}>
						<div>Stuff goes here.</div>
					</NewEvalModal>
					<DiagnosisCard 
						firstName={this.state.firstName} 
						lastName={this.state.lastName}
						age={this.state.age}
						diagnosis={this.state.diagnosis}
					/>
					{this.state.evals.map(ev => (
						<DiagnosisCard type={ev.type}/>
					))}
					<DiagnosisControls addCard={this.addCardHandler}/>
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