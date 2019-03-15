import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  fetchRestaurants,
  refineRestaurants
} from "../actions/restaurantActions";

import "./restaurants.css";

class Restaurants extends Component {
  refineVisible = false;

  isMobileDevice() {
    return (
      typeof window.orientation !== "undefined" ||
      navigator.userAgent.indexOf("IEMobile") !== -1
    );
  }

  handleGetClick() {
    const city = document.getElementById("cityName").value;
    this.props.fetchRestaurants(city);
    this.refineVisible = true;
  }

  handleRefine(event) {
    const val = event.target.value;
    this.props.refineRestaurants(val);
  }

  render() {
    const restaurantItems = this.props.filteredList.map(restaurant => (
      <div key={restaurant.id} className="flexmode">
        <div className="image">
          <img src={restaurant.image_url} alt={restaurant.name} />
        </div>
        <div className="content">
          <div className="rating">{"$".repeat(restaurant.price)}</div>
          <h3>{restaurant.name}</h3>
          <h5>
            {restaurant.address}, {restaurant.city}, {restaurant.state}{" "}
            {restaurant.postal_code}
          </h5>
          <p>
            <a href={"tel:" + restaurant.phone}>{restaurant.phone}</a>
            <br />
            <a
              href={
                this.isMobileDevice()
                  ? restaurant.mobile_reserve_url
                  : restaurant.reserve_url
              }
              target="_new"
            >
              Make a reservation
            </a>
          </p>
        </div>
      </div>
    ));

    return (
      <div className="display-area">
        <h1>Restaurants</h1>
        <div className="inputs">
          <input
            type="text"
            id="cityName"
            className="input"
            placeholder="Enter City"
          />
          <button className="button" onClick={this.handleGetClick.bind(this)}>
            Get
          </button>
          <input
            type="text"
            placeholder="Refine by Name/Address"
            className={this.refineVisible ? "input" : "hidden"}
            onChange={this.handleRefine.bind(this)}
          />
        </div>
        {restaurantItems}
      </div>
    );
  }
}

Restaurants.propTypes = {
  fetchRestaurants: PropTypes.func.isRequired,
  refineRestaurants: PropTypes.func.isRequired,
  restaurants: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  restaurants: state.restaurants.restaurantList,
  filteredList: state.restaurants.filteredList
});

export default connect(
  mapStateToProps,
  { fetchRestaurants, refineRestaurants }
)(Restaurants);
