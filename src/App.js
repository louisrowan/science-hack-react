import React from 'react';
import './App.css';
import splashImage from '../public/kids-doing-science.jpg'

const App = React.createClass({
  render() {
    return (
      <div className="App">
        <ul id="navbar">
         <li><a href='/'>Home</a></li>
          <li><a href='/#/search'>Search</a></li>
        </ul>

        <div className="splash">
          <img id="splash-image" src={splashImage} alt="kids doing experiment"/>
          <h1 id="splash-header">Rainy Day Science</h1>
        </div>
        {this.props.children}
      </div>
    );
  }
})

export default App;
