import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store/store";

import logo from "./my-logo.png";
import "./App.css";

import Restaurants from "./components/Restaurants";

//const store = createStore(() => [], {}, applyMiddleware());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Restaurants />
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
