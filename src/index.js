import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const Show = require('./Show')
const Search = require('./Search')
const NewExperiment = require('./NewExperiment')
import './index.css';
const { Router, Route, hashHistory } = require('react-router')
import { Provider } from 'react-redux'
var store = require('./redux/store').default

const Index = () => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={App} />
      <Route path='/search' component={Search} />
      <Route path='/show/:id' component={Show} />
      <Route path='/new_experiment' component={NewExperiment} />
    </Router>
  </Provider>
)

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
