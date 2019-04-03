import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom';

class DepressionChart2 extends Component{
    render(){
        return(
            <div className="DepressionChart2">
                <p>Initial therapy with citalopram or sertraline 
                    (unless compelling indication for alternative agent) 
                    Address side effects and encourage adherence in 1 week. 
                    Evaluate response in 3-4 weeks.</p>
                <Link to="/patient_evaluation3a" style={{ textDecoration: 'none', display: 'block' }}>
                    <Button color="primary" onClick={() => { console.log('onClick'); }}>
                        Non-Response
                    </Button>
                </Link>
                <Link to="/patient_evaluation3b" style={{ textDecoration: 'none', display: 'block' }}>
                    <Button color="primary" onClick={() => { console.log('onClick'); }}>
                        Partial Response
                    </Button>
                </Link>
                <Link to="/patient_evaluation3c" style={{ textDecoration: 'none', display: 'block' }}>
                    <Button color="primary" onClick={() => { console.log('onClick'); }}>
                        Full Response
                    </Button>
                </Link>
            </div>
        );
    }
}
export default DepressionChart2;