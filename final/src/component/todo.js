import React, { Component } from "react";

class todo extends Component {
  constructor(props) {
    super(props);
//state
    this.state = {
      u_input: "",
      list: [],
    };
  }
  //set a user input value
  userInput(value) {
    this.setState({
      u_input: value,
    });
  }

  //add item if user input is not empty

  addItem() {
    if (this.state.u_input != "") {
      const u_input = {
        id: Math.random(),

        value: this.state.u_input,
      };
      //update list
      const list = [...this.state.list];
      list.push(this.state.u_input);

      //reset state
      this.setState({
        list,
        u_input: "",
      });
    }
  }

  render() {
    return (
      <div>
        <h1>TODO LIST</h1>
        <hr />
        <form
          placeholder="add todo.."
          value={this.state.u_input}
          onChange={(item) => this.userInput(item.target.value)}
        />

        <button onClick={() => this.addItem()}></button>
      </div>
    );
  }
}
export default todo;
