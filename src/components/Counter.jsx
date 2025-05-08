import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props){
        super(props);
        //Initialize the state
        this.state = {
            count: 0
        };
    }
    incremntCount = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }));
    }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.incremntCount}>Increment</button>
      </div>
    );
  }
}
