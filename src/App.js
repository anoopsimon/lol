import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      output: "",
      loading: true,
    };
  }

  renderContent = () => {
    var message =  <h1> {this.state.output} </h1>;
    if (isMobile) {
      return (
        <div>
          
          <MobileView>
          {message}
          </MobileView>
        </div>
      );
    } else if(isBrowser){
      return (
        <div>
          <BrowserView>
          {message}
          </BrowserView>
        </div>
      );
    }else{
     return( <h1>This device is not supported</h1>)
    }
  };

  render() {
    return <div>{this.renderContent()}</div>;
  }

  componentDidMount = async () => {
    let joke = "";

    const apiUrl = "https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=racist";
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
