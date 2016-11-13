import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <a href='/#/show'>Show</a><br />
<<<<<<< HEAD
      <a href='/#/test'>Test</a><br />
=======
      <a href='/#/search'>Search</a>
>>>>>>> 0b7afe264612850d630eb6b1c8160fd1d1b5510e
        {this.props.children}
      </div>
    );
  }
}

export default App;
