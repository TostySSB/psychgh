import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom';

class DepressionChart extends Component{
    render(){
        return(
            <div className="DepressionChart">
                <p>Diagnosis of Depression</p>
                <Link to="/patient_evaluation2" style={{ textDecoration: 'none', display: 'block' }}>
                    <Button color="primary" onClick={() => { console.log('onClick'); }}>
                        Continue
                    </Button>
                </Link>
                
            </div>
        );
    }
}
export default DepressionChart;