import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      output: "",
      loading: true,
      style: {
        marginTop: "10%",
      },
    };
  }


  render(){
    return(
     <div>{this.renderJokes()}</div>
    )
  }
  
  renderJokes = () => {
    return (
      <div>
        <Container style={this.state.style}>
          <Row className="justify-content-md-center">
            <Col xs lg="2"></Col>
            <Col md="auto">
              <Card style={{ width: "20rem" }} className="shadow-lg">
                <Card.Body>
                  <blockquote className="blockquote  mb-0">
                    {this.state.output}
                  </blockquote>
                </Card.Body>
              </Card>
            </Col>
            <Col xs lg="2"></Col>
          </Row>
        </Container>
      </div>
    );
  };

  componentDidMount = async () => {
    let joke = "";

    const apiUrl =
      "https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=racist";
    try {
      this.setState({
        loading: true,
      });
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (data.setup) {
        // for 2 part joke
        joke = `${data.setup} ... ${data.delivery}`;
      } else {
        // for single line joke
        joke = data.joke;
      }
    } catch (error) {
      console.log("error thrown", error);
    } finally {
      this.setState({
        output: joke,
        loading: false,
      });
    }
  };
}
