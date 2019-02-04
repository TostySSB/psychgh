import React, { Component } from 'react';
export default class docs extends Component {
     state = {
     }
     // This is the standard render function, it is rendering our component that links to our ReadTheDocs page
     render() {
          return (
               <div id='container'>
                    <div id='body'>
                         <div>
                              <p>Our documentation is hosted on ReadTheDocs. Please click the link below to view the documentation for PsychGH</p>
                              <a href="https://psychgh.readthedocs.io">View Documentation</a>
                         </div>
                    </div>
               </div>
          )
     }
}