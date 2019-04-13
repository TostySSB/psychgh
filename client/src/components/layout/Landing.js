import React, { Component } from "react";
import HomePageGrid from '../UI/grids/HomePageGrid';
class Landing extends Component {
  render() {
    return (
      <div>
        <div style={{ paddingTop: "10%", paddingBottom: "10%" }} className="container valign-wrapper" >
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Welcome</b> to Psych432, a work in progress app designed to make the lives of patients and practitioners easier.
            </h4>
            <p className="flow-text grey-text text-darken-1">
              Proudly built using the MERN stack.
            </p>
          </div>
        </div>
      </div>
        <HomePageGrid></HomePageGrid>
        <div className="col s12 center-align">
            <p className="flow-text grey-text text-darken-1">
              For assistance, please contact us at: tempEmailName@gmail.com
            </p>
          </div>
      </div>
      
    );
  }
}

export default Landing;
