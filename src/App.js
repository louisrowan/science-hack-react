import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <a href='/#/show'>Show</a><br />
      <a href='/#/test'>Test</a><br />
        {this.props.children}
      </div>
    );
  }
}

export default App;
