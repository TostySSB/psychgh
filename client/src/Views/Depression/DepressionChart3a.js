import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom';

class DepressionChart3a extends Component{
    render(){
        return(
            <div className="DepressionChart3a">
                <p>Non Response</p>
                <p>Ensure medical adherence
                    Optimize dose OR switch (alternate SSRI or non-SSRI)
                </p>
                <Link to="/patient_evaluation4a" style={{ textDecoration: 'none', display: 'block' }}>
                    <Button color="primary" onClick={() => { console.log('onClick'); }}>
                        Continue
                    </Button>
                </Link>
              
            </div>
        );
    }
}
export default DepressionChart3a;