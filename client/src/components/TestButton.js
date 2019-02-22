import React, { Component } from 'react';
import axios from 'axios';
class TestButton extends Component{
    postSomething = () => {
        const task = {action: "its ultra lit"}
        axios.post('/api/todos',task).catch(err => console.log(err))
    
    }
    render() {
        return (
          <div>
            <button onClick={this.postSomething}>CLICKME </button>
          </div>
        )
      }
}
export default TestButton;