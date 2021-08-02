import logo from "./logo.svg";
import "./App.css";
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
  render() {
    return (
      <div>
        <p>{this.state.output}</p>
        <BrowserView>
          <h1> This is rendered only in browser </h1>
        </BrowserView>
        <MobileView>
          <h1> This is rendered only on mobile </h1>
        </MobileView>
      </div>
    );
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
