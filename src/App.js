import React, { Component } from 'react';
import './App.css';
import Text from "./Text.jsx";


class App extends Component {

  render() {
    return (
   
      <div className="App">
      <div className="Box">
     <h1> The Good</h1>
      <Text/>
        </div>
        <div className="Box">
        <h1> The Bad </h1> 
      <Text/>
        </div>
        <div className="Box">
        <h1>The Ugly</h1>
      <Text/>
        </div>
      </div>
     
    );
  }
}

export default App;
