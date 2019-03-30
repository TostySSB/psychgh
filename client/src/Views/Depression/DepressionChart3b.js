import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom';

class DepressionChart3b extends Component{
    render(){
        return(
            <div className="DepressionChart3b">
                <p>Partial Response</p>
                <p>Optimize dose OR augment</p>
                <Link to="/patient_evaluation4b" style={{ textDecoration: 'none', display: 'block' }}>
                    <Button color="primary" onClick={() => { console.log('onClick'); }}>
                        Continue
                    </Button>
                </Link>
            </div>
        );
    }
}
export default DepressionChart3b;