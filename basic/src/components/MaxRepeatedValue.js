import React, { Component } from "react";

export class MaxRepeatedValue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [0, 1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10],
      value: -1,
    };
  }

  thirdevaluate() {
    let prev = -1;
    this.state.arr.forEach((val) => {
      if (prev === val) {
        this.setState({
          value: prev,
        });
        return;
      } else {
        prev = val;
      }
    });
  }

  render() {
    return (
      <div>
        <h1>-----------------------------------------------------------</h1>
        <button onClick={() => this.thirdevaluate()}>Find MAX repeat</button>
        <p>{this.state.value === -1 ? "" : this.state.value}</p>
      </div>
    );
  }
}

export default MaxRepeatedValue;
