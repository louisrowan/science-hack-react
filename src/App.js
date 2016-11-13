import React from 'react';
import './App.css';

const App = React.createClass({
  render() {
    return (
      <div className="App">
        <ul id="navbar">
          <li><a href='/#/search'>Search</a></li>
          <li><a href='/#/show'>Show</a></li>
          <li><a href='/#/googleMaps'>Google Maps</a></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
})

export default App;
