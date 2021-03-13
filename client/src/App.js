/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import "./App.css";
import Jumbotron from "./component/Jumbotron";
import {Col, Row, Container} from "./component/Grid";


class App extends Component {
  render() {
    return (
      <div>
       <Jumbotron>
          <h1>Parcel</h1>
          <p>ship more for less</p>
        </Jumbotron>
        <Container>
          <Row size="4" >
            <Col size="md-12">
              <header> Package expected:</header>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }  
}

export default App;
