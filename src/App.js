import React, { Component } from 'react';
import './App.css';
import AddNumberRoot from './components/AddNumberRoot';
import DisplayNumberRoot from './components/DisplayNumberRoot';

class App extends Component {
  state = { number: 0 };
  render() {
    const chgVal = (size) => {
      this.setState({
        number: this.state.number + size
      });
    }
    return (
      <div className="App">
        <h1>Root</h1>
        <AddNumberRoot onClick={chgVal}></AddNumberRoot>
        <DisplayNumberRoot number={this.state.number}></DisplayNumberRoot>
      </div>
    );
  }
}

export default App;
