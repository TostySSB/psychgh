import React, {Component} from 'react';

class NewDiagnosisChart extends Component {
	constructor() {
		super();
		this.state = {
			firstName: "",
			lastName: ""
 		};
	}

	render() {
		return(
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
}

export default NewDiagnosisChart;