import React from 'react';
import './App.css';
import splashImage from '../public/kids-doing-science.jpg'
import brainIcon from '../public/brain.png'
import beakerIcon from '../public/beaker.jpg'
import materialsIcon from '../public/materials.jpg'

const App = React.createClass({
  render() {
    return (
      <div className="App">
        <ul id="navbar">
          <li><a href='/#/search'>Search</a></li>
          <li><a href='/#/show'>Show</a></li>
          <li><a href='/#/new_experiment'>Create Experiment</a></li>
          <li><a href='/#/googleMaps'>Google Maps</a></li>
        </ul>

        <div className="splash">
          <img id="splash-image" src={splashImage} alt="kids doing experiment"/>
          <h1 id="splash-header">Rainy Day Science</h1>
        </div>
        <img className="main-icons" src={materialsIcon}/>
        <span className="main-captions">Submit your materials.</span>
        <img className="main-icons" src={beakerIcon}/>
        <span className="main-captions">Find an experiment.</span>
        <img className="main-icons" src={brainIcon}/>
        <span className="main-captions">Learn and have fun!</span>
        {this.props.children}
      </div>
    );
  }
})

export default App;
