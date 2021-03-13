/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import "./App.css";
import Jumbotron from "./component/Jumbotron";


class App extends Component {
  render() {
    return (
<<<<<<< HEAD

      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
=======
      <div>
        <Jumbotron>
          <h1>Parcel</h1>
          <p>ship more for less</p>
        </Jumbotron>
>>>>>>> fa9f46915419156727c9cca298769f9ccbd7dbe0
      </div>
    );
  }
}

export default App;
