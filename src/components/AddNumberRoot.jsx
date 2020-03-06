import React, { Component } from 'react';
import AddNumber from './AddNumber';

export default class AddNumberRoot extends Component {
  render() {
    const plusVal = (size) => {
      this.props.onClick(size);
    };
    return (
      <div>
        <h1>Add Number Root</h1>
        <AddNumber onClick={plusVal}></AddNumber>
      </div>
    )
  }
}
