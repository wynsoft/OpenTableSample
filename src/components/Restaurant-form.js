import React, { Component } from "react";

import "./restaurants.css";

class RestaurantForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: []
    };
  }

  render() {
    return (
      <div>
        <h1>Enter City</h1>
      </div>
    );
  }
}

export default Restaurants;
