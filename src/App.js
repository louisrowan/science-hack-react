import React from 'react';
import './App.css';
import splashImage from '../public/kids-doing-science.jpg'
import brainIcon from '../public/brain.png'
import beakerIcon from '../public/beaker.jpg'
import materialsIcon from '../public/materials.jpg'

var ReactDOM = require('react-dom');
var Modal = require('react-modal');
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

const App = React.createClass({
  getInitialState: function() {
    return { modalIsOpen: false };
  },
 
  openModal: function() {
    this.setState({modalIsOpen: true});
  },
 
  afterOpenModal: function() {
    // references are now sync'd and can be accessed. 
    this.refs.subtitle.style.color = '#f00';
  },
 
  closeModal: function() {
    this.setState({modalIsOpen: false});
  },

  render() {
    return (
      <div className="App">
        <ul id="navbar">
          <li><a href='/#/search'>Search</a></li>
          <li><a href='/#/show'>Show</a></li>
          <li><a href='/#/new_experiment'>Create Experiment</a></li>
          <li><a href='#' onClick={this.openModal}>Google Maps</a></li>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles} >
            <img src="https://maps.googleapis.com/maps/api/staticmap?center=225+Bush+St,San+Francisco,CA&zoom=12&size=900x900&maptype=roadmap&markers=225+Bush+St,San+Francisco,CA&markers=Pier+15,San+Francisco,CA&markers=355+Clementina+St,San+Francisco,CA&markers=55+Music+Concourse+Dr,San+Francisco,CA&markers=199+Museum+Way,San+Francisco,CA&markers=9th+Ave+&+Lincoln+Way,San+Francisco,CA&key=AIzaSyB4Y7iIXkk5aVZ_exiNh1cVM2h1fya61mw" />
          </Modal>
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
