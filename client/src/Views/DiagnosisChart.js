import React, {Component} from 'react';
import './DiagnosisChart.css';
import PropTypes from "prop-types";
import { connect } from "react-redux";
//import '../components/UI/cards/ExplorationCard.js';

class DiagnosisChart extends Component {
	constructor() {
		super();
		this.props = {
			newExploration: false,
			firstName: "",
			lastName: "",
			errors: {}
		};
	}
	
	handleSubmit = event => {
		event.preventDefault();
		const userData = {
			firstName: this.props.firstName,
			lastName: this.props.lastName
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
				this.props.history.push('/DiagnosisExploration');
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


	handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
    	});
  	}
 	
	render() {
		return (
			<div className='DiagnosisChart'>
				<h1>New Diagnosis Exploration</h1>
				<p>Enter the patients name below to start a new diagnosis exploration.</p>
			  <div style={{ marginTop: "4rem" }} className="row">
				<div className="col s8 offset-s2">
				  <form  onSubmit={this.handleSubmit}>
					<div className="input-field col s12">
						<input 
							onChange={this.handleChange}
							value={this.props.firstName}
							id="first_name" 
							type="text"/>
						<label htmlFor="first_name">First Name</label>
					</div>
					<div className="input-field col s12">
						<input 
							onChange={this.handleChange}
							value={this.props.lastName}
							id="last_name" 
							type="text"/>
						<label htmlFor="last_name">Last Name</label>
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
}

DiagnosisChart.propTypes = {
	firstName: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
	firstName: state.firstName,
	errors: state.errors
  });
  
  export default connect(
	mapStateToProps,
  )(DiagnosisChart);