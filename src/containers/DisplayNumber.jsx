import React, { Component } from "react";
import store from "../store";
import DisplayNumber from "../components/DisplayNumber";

export default class extends Component {
  state = { number: store.getState().number }
  constructor(props) {
    super(props);
    store.subscribe(() => {
      this.setState({ number: store.getState().number });
    })
  }
  render() {
    return <DisplayNumber number={this.state.number}></DisplayNumber>;
  }
}