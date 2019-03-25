import React, { Component } from 'react';
import './App.css';


class Hate extends Component {
  state = {
    hate: 0
  };
  hate = () => this.setState({ hate: this.state.hate + 1 })

  render() {
    return (
    
      <button className="HateButt" onClick={this.hate}>
           {this.state.hate}<i class="far fa-angry"></i>
        </button>
     
    );
  }
}

export default Hate;