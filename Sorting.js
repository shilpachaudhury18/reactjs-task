import React, { Component } from "react";

class Sorting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { id: 4, name: "ExpressJS" },
        { id: 10, name: "ReactJS" },
        { id: 5, name: "MongoDB" },
        { id: 6, name: "NodeJS" },
      ],
    };
    console.log(this.state.data);
  }

  render() {
    const { data } = this.state;
    return data
      .sort((a, b) => (a.id > b.id ? 1 : -1))
      .map((item, i) => (
        <>
          <div key={i}>
            <ul>
              <li>
                <strong> Id </strong> {item.id} . <strong> Name: </strong>
                {item.name}
              </li>
            </ul>
          </div>
        </>
      ));
    
  }
}

export default Sorting;
