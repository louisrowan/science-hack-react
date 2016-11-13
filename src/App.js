import React from 'react';
import './App.css';

const App = React.createClass({
  render() {
    return (
      <div className="App">
      <a href='/#/show'>Show</a><br />
      <a href='/#/test'>Test</a><br />
      <a href='/#/search'>Search</a>
        {this.props.children}
      </div>
    );
  }
})

export default App;
