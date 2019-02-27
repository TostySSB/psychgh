import React, { Component } from 'react';
//This is the Home view, it acts as a home page for our app and is a react component

export default class Home extends Component {
   state = { 
   }
   render () {                                   
      return (
        <div className="Home" id='container'>
            <div className="lander">
            </div>
            <p>Disclaimer: This is a Zero Feature Release, meaning that none of the final features of the product have been released yet.</p>
            <p>For more information about Psych432 and how to obtain the current release view our documentation or our github page below.</p>
            <a href="https://github.com/TostySSB/psychgh">GitHub</a>
            <br />
           <a href="Docs">View Documentation</a>
        </div>
      )
   }
}