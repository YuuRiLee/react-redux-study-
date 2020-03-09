import React, { Component } from "react";
import store from "../store";
import AddNumber from "../components/AddNumber";

export default class extends Component {
  render() {
    const btnClick = (size) => {
      store.dispatch({
        type: 'INCREMENT',
        size: size
      });
    };
    return <AddNumber onClick={btnClick}></AddNumber>;
  }
}
