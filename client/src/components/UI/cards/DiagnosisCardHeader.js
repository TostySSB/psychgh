import React from 'react';

function DiagnosisCardHeader(props) {
	console.log(props);
	return (
		<h3>{props.firstName} {props.lastName}</h3>
	)
}

export default DiagnosisCardHeader