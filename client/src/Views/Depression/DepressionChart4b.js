import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom';

class DepressionChart4b extends Component{
    render(){
        return(
            <div className="DepressionChart4b">
                <p>Evaluate Response in 3-4 Weeks</p>
                <Link to="/patient_evaluation5a" style={{ textDecoration: 'none', display: 'block' }}>
                    <Button color="primary" onClick={() => { console.log('onClick'); }}>
                        Non-Response
                    </Button>
                </Link>
                <Link to="/patient_evaluation5b" style={{ textDecoration: 'none', display: 'block' }}>
                    <Button color="primary" onClick={() => { console.log('onClick'); }}>
                        Partial Response
                    </Button>
                </Link>
                <Link to="/patient_evaluation5c" style={{ textDecoration: 'none', display: 'block' }}>
                    <Button color="primary" onClick={() => { console.log('onClick'); }}>
                        Full Response
                    </Button>
                </Link>
            </div>
        );
    }
}
export default DepressionChart4b;