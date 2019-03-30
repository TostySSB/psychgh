import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom';

class DepressionChart4a extends Component{
    render(){
        return(
            <div className="DepressionChart4a">
                <p>Evaluate Response in 3-4 weeks</p>
                <Link to="/patient_evaluation6a" style={{ textDecoration: 'none', display: 'block' }}>
                    <Button color="primary" onClick={() => { console.log('onClick'); }}>
                        Non Response
                    </Button>
                </Link>
                <Link to="/patient_evaluation6b" style={{ textDecoration: 'none', display: 'block' }}>
                    <Button color="primary" onClick={() => { console.log('onClick'); }}>
                        Partial Response
                    </Button>
                </Link>
                <Link to="/patient_evaluation6c" style={{ textDecoration: 'none', display: 'block' }}>
                    <Button color="primary" onClick={() => { console.log('onClick'); }}>
                        Full Response
                    </Button>
                </Link>
            </div>
        );
    }
}
export default DepressionChart4a;