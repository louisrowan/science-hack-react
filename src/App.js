import React from 'react';
import './App.css';

const App = React.createClass({
  render() {
    return (
      <div className="App">
      <a href='/#/search'>Search</a>
        {this.props.children}
      </div>
    );
  }
})

export default App;
