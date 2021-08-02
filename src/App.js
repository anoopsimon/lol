import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      output: "",
      loading: true,
    };
  }

  renderContent = () => {
    if (isMobile) {
      return (
        <div>
          
          <MobileView>
            <h1> {this.state.output} </h1>
          </MobileView>
        </div>
      );
    } else {
      return (
        <div>
          <BrowserView>
            <h1> {this.state.output} </h1>
          </BrowserView>
        </div>
      );
    }
  };

  render() {
    return <div>{this.renderContent()}</div>;
  }

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
