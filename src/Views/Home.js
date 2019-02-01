import React, { Component } from 'react';
export default class Home extends Component {
   state = { 
   }
   render () {                                   
      return (
        <div id='container'>
            <p>This is Psych432</p>
            <p>Disclaimer: This is a Zero Feature Release, meaning that none of the final features of the product have been released yet.</p>
            <p>For more information about Psych432 and how to obtain the current release view our documentation or our github page below.</p>
            <a href="https://github.com/TostySSB/psychgh">GitHub</a>
            <br />
           <a href="Docs">View Documentation</a>
        </div>
      )
   }
}