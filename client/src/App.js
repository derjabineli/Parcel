/* eslint-disable react/prefer-stateless-function */
import React, { useState } from "react";
import "./App.css";
// <<<<<<< HEAD
import { Button, Navbar, Nav, Form, Row, Col, Image, Container,form,label} from 'react-bootstrap'
import logo from './ARLOR.png'
import measure from './measure.png'
import axios from "axios"
// NOT SURE IF THIS HOW YOU LINK THEM?
// import "./App.css"
// import "./component/create-user-component.js";

function App() {

  const [formData, setFormData] = useState({});

  const handleSubmit = async (event) => {
    console.log(formData);
    try {
      const result = await axios({ method: "POST", url: "/api/estimate", data: formData });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
    //   this.props.history.push('/dashboard')
  }

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  return (
    <>
      <Navbar bg="light" expand="lg" >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Image src={logo} fluid style={{ height: '75px' }}/>
          </Nav>
          <nav-link>
           <li class="nav-link">
             <a class="nav-link active" aria-current="page" href="./com ">log-in</a>
            </li>
          </nav-link>
        </Navbar.Collapse>
      </Navbar>
      <br></br>
      <Container>
        <h1>Package Info:</h1>
        <Row>
          <Col sm={8}>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Height</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Width</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Depth</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Weight</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Form.Row>
            </Form>
          </Col>
          <Col sm={4}>
            <Container>
              <Image src={measure} alt="a picture" fluid style={{ width: '200px', height: '100%', float: 'center' }} />
            </Container>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group controlId="formGridAddress1">
                <h1>From:</h1>
                <Form.Label>Address</Form.Label>
                <Form.Control name="address1" onChange={(e) => handleInputChange(e)} placeholder="1234 Main St" />
              </Form.Group>

              <Form.Group controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control name="city1" onChange={(e) => handleInputChange(e)} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Control name="state1" onChange={(e) => handleInputChange(e)} as="select" defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>AL</option>
                    <option>AK</option>
                    <option>AZ</option>
                    <option>AR</option>
                    <option>CA</option>
                    <option>CO</option>
                    <option>CT</option>
                    <option>DE</option>
                    <option>FL</option>
                    <option>GA</option>
                    <option>HI</option>
                    <option>ID</option>
                    <option>IL</option>
                    <option>IN</option>
                    <option>IA</option>
                    <option>KS</option>
                    <option>KY</option>
                    <option>LA</option>
                    <option>ME</option>
                    <option>MD</option>
                    <option>MA</option>
                    <option>MI</option>
                    <option>MN</option>
                    <option>MS</option>
                    <option>MO</option>
                    <option>MT</option>
                    <option>NE</option>
                    <option>NV</option>
                    <option>NH</option>
                    <option>NJ</option>
                    <option>NM</option>
                    <option>NY</option>
                    <option>NC</option>
                    <option>ND</option>
                    <option>OH</option>
                    <option>OK</option>
                    <option>OR</option>
                    <option>PA</option>
                    <option>RI</option>
                    <option>SC</option>
                    <option>SD</option>
                    <option>TN</option>
                    <option>TX</option>
                    <option>UT</option>
                    <option>VT</option>
                    <option>VA</option>
                    <option>WA</option>
                    <option>WV</option>
                    <option>WI</option>
                    <option>WY</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control name="zip1" onChange={(e) => handleInputChange(e)} />
                </Form.Group>
              </Form.Row>
            </Form>
          </Col>
          <Col>
            <Form>
              <Form.Group controlId="formGridAddress1">
                <h1>To:</h1>
                <Form.Label>Address</Form.Label>
                <Form.Control name="address2" onChange={(e) => handleInputChange(e)} placeholder="1234 Main St" />
              </Form.Group>

              <Form.Group controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control name="city2" onChange={(e) => handleInputChange(e)} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Control name="state2" onChange={(e) => handleInputChange(e)} as="select" defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>AL</option>
                    <option>AK</option>
                    <option>AZ</option>
                    <option>AR</option>
                    <option>CA</option>
                    <option>CO</option>
                    <option>CT</option>
                    <option>DE</option>
                    <option>FL</option>
                    <option>GA</option>
                    <option>HI</option>
                    <option>ID</option>
                    <option>IL</option>
                    <option>IN</option>
                    <option>IA</option>
                    <option>KS</option>
                    <option>KY</option>
                    <option>LA</option>
                    <option>ME</option>
                    <option>MD</option>
                    <option>MA</option>
                    <option>MI</option>
                    <option>MN</option>
                    <option>MS</option>
                    <option>MO</option>
                    <option>MT</option>
                    <option>NE</option>
                    <option>NV</option>
                    <option>NH</option>
                    <option>NJ</option>
                    <option>NM</option>
                    <option>NY</option>
                    <option>NC</option>
                    <option>ND</option>
                    <option>OH</option>
                    <option>OK</option>
                    <option>OR</option>
                    <option>PA</option>
                    <option>RI</option>
                    <option>SC</option>
                    <option>SD</option>
                    <option>TN</option>
                    <option>TX</option>
                    <option>UT</option>
                    <option>VT</option>
                    <option>VA</option>
                    <option>WA</option>
                    <option>WV</option>
                    <option>WI</option>
                    <option>WY</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control name="zip2" onChange={(e) => handleInputChange(e)} />
                </Form.Group>
              </Form.Row>
            </Form>
          </Col>
        </Row>
        <Button onClick={(e) => { handleSubmit(e) }} variant="primary" type="submit">  Submit </Button>
      </Container>

    </>
  )
}

export default App;
