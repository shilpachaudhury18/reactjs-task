import React, { Component } from "react";
import axios from "axios";

class ApiCall extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      example: [],
    };
  }

  componentDidMount() {
    // The Given API link is not working so using own API from json place holder

    // axios
    //   .get("www.example.com/api/get/1")
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //   });

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response.data);
        this.setState({
          example: response.data,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  render() {
    return (
      <div>
        <h1>API Call</h1>
        {this.state.example.map((user) => (
          <>
            <ul key={user.id}>
              <li>{user.name}</li>
              <li>{user.username}</li>
              <li>{user.address.street}</li>
              <li>{user.address.suite}</li>
              <li>{user.address.city}</li>
              <li>{user.address.zipcode}</li>
              <li>{user.address.geo.lat}</li>
              <li>{user.address.geo.lng}</li>
              <li>{user.phone}</li>
              <li>{user.website}</li>
              <li>{user.company.name}</li>
              <li>{user.company.catchPhrase}</li>
              <li>{user.company.bs}</li>
            </ul>
            <h6>------------------------------------------------------------------------------</h6>
          </>
        ))}
        <h1>----------------------------------------------------------</h1>
      </div>
    );
  }
}

export default ApiCall;
