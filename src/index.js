import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const Show = require('./Show')
const Search = require('./Search')
import './index.css';
const { Router, Route, hashHistory } = require('react-router')

const Index = () => (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#news">News</a></li>
      <li class="dropdown">
        <a href="#" class="dropbtn">Dropdown</a>
        <div class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </li>
    </ul>

      <Route path='/search' component={Search} />
      <Route path='/show/:id' component={Show} />
    </Route>
  </Router>
)

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
