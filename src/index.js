import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const Show = require('./Show')
const Search = require('./Search')
const NewExperiment = require('./NewExperiment')
const GoogleMaps = require('./GoogleMaps')
import './index.css';
const { Router, Route, hashHistory } = require('react-router')

const Index = () => (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='/search' component={Search} />
      <Route path='/show/:id' component={Show} />
      <Route path='/new_experiment' component={NewExperiment} />
      <Route path='/google_maps' component={GoogleMaps} />
    </Route>
  </Router>
)

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
