import React, { Component } from 'react';
//This is the Home view, it acts as a home page for our app and is a react component
import HomePageGrid from '../components/UI/grids/HomePageGrid';
export default class Home extends Component {
   state = { 
   }
   render () {                                   
      return (
        <div className="Home" id='container'>
            <div className="lander">
            </div>
            <HomePageGrid></HomePageGrid>
            <br />
        </div>
      )
   }
}