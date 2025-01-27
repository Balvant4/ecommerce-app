import React, { Component } from "react";
import MainButton from "../../components/MainButton";

export default class AllProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  // Function to increment the count
  addNumber = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  // Function to decrement the count
  removeNumber = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  render() {
    return (
      <div>
        <MainButton text="Add" onClick={this.addNumber} />
        <h1>{this.state.count}</h1>
        <MainButton text="Remove" onClick={this.removeNumber} />
      </div>
    );
  }
}
