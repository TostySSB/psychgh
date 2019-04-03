import React, { Component } from 'react';
import PatientExplorationGrid from '../components/UI/grids/PatientExplorationGrid';

class PatientExploration extends Component{
    render(){
        return(
            <div className="PatientExploration">
                <PatientExplorationGrid/>
            </div>
        );
    }
}
export default PatientExploration;