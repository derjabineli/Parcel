/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import "./App.css";
import Jumbotron from "./component/Jumbotron";


class App extends Component {
  render() {
    return (
      <div>
      <Jumbotron>
        <h1>Parcel</h1>
        <p>ship more for less</p>
      </Jumbotron>
      </div>
    )
  }  
}

export default App;
