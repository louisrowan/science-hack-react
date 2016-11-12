import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const Show = require('./Show')
const Test = require('./Test')
import './index.css';
const { Router, Route, IndexRoute, hashHistory } = require('react-router')

const Index = () => (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='/test' component={Test} />
      <Route path='/show' component={Show} />
    </Route>
  </Router>
)

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
