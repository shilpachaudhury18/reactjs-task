import React, { Component } from "react";

class EvenNumbers extends Component {
  evenNumber() {
    for (let count = 0; count <= 50; count++) {
      if (count % 2 === 0) {
        console.log(count);
      }
    }
  }

  render() {
    return (
      <div>
        <h1>Finding Even Number</h1>
        <p>Note: Check console log for output</p>
        <button onClick={this.evenNumber}>Even number</button>
        <h1>--------------------------------------------------------------</h1>
      </div>
    );
  }
}

export default EvenNumbers;
