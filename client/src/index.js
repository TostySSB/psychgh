import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Security } from '@okta/okta-react';
import './index.css';
import config from './app.config';
import App from './App';

function onAuthRequired({ history }) {
    history.push('/login');
  }
render((
    <BrowserRouter>
        <Security
        issuer={config.issuer}
        client_id={config.client_id}
        redirect_uri={config.redirect_uri}
        onAuthRequired={onAuthRequired}
        >
            <App/>
        </Security>
    </BrowserRouter>
    
),document.getElementById('root'))
