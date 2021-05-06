import React, { Component } from "react";
import ListItem from "./ListItem";

export class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
      },
    };
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  handleInput(event) {
    this.setState({
      currentItem: {
        text: event.target.value,
        key: Date.now(),
      },
    });
  }

  addItem(event) {
    event.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if (newItem !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  }

  render() {
    return (
      <div>
        <form action="" onSubmit={this.addItem}>
          <input
            type="text"
            placeholder="Enter Here"
            onChange={this.handleInput}
            value={this.state.currentItem.text}
          />
          <button type="submit">Add</button>
        </form>
        <ListItem items={this.state.items}> </ListItem>
      </div>
    );
  }
}

export default AddTodo;
