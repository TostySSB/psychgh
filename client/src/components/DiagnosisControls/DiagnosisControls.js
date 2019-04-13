import React from 'react';
import style from './DiagnosisControls.css';
import DiagnosisControl from './DiagnosisControl';

const diagnosisControls = (props) => (
	<div className={style.DiagnosisControls}>
		<DiagnosisControl added={() => props.addCard()}/>
	</div>
);

export default diagnosisControls