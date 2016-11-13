const React = require('react')

const Show = React.createClass({
  render(){
    return (
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
    )
  }
})

module.exports = Show