import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom';

class DepressionChart5a extends Component{
    render(){
        return(
            <div className="DepressionChart5a">
                <p>Non Response</p>
                <p> Swich to a different antidepressant
                    (SSRI or non-SSRI)
                </p>
            </div>
        );
    }
}
export default DepressionChart5a;