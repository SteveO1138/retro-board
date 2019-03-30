import React, { Component } from 'react';
import './App.css';
import ListItem from "./Listitem";




class Text extends Component {
  state = {
    userInput: "",
    text: []
  };
  setUserInput = userInput => this.setState({ userInput });
  add = e => {
    e.preventDefault();
    this.setState({
      text: [...this.state.text, this.state.userInput],
      userInput: ""
    });
  };
  delete = deleteIndex => {
    const text = this.state.text.filter((text, index) => {
      return index !== deleteIndex;
    });
    this.setState({ text });
  };
  render() {
    return (
      <div className="container mt-4">
      <header className="App-header">
      <form className="form-group" onSubmit={this.add}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter text"
          aria-label="Enter text"
          aria-describedby="button-add"
          value={this.state.userInput}
          onChange={e => this.setUserInput(e.target.value)}
        />
        <div className="input-group-append">
          <button
            className="btn btn-primary"
            type="subimit"
            id="button-add"
          >
            Add
          </button>
        </div>
      </div>
    </form></header>
        <div className="list-group">
          {this.state.text.map((text, index) => {
            return (
              
              <ListItem
                key={`text-${index}`}
                index={index}
                delete={this.delete}
              >
                {text}
              </ListItem>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Text;