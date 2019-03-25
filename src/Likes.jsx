import React, { Component } from 'react';
import './App.css';


class Likes extends Component {
  state = {
    likes: 0
  };
  like = () => this.setState({ likes: this.state.likes + 1 })

  render() {
    return (
    
      <button className="LikeButt" onClick={this.like}>
           {this.state.likes}<i class="far fa-laugh-wink"></i>
        </button>
     
    );
  }
}

export default Likes;