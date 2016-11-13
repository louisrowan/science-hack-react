const React = require('react')
import $ from 'jquery'

const GoogleMaps = React.createClass({
  render(){
    return (
      <img src="https://maps.googleapis.com/maps/api/staticmap?center=225+Bush+St,San+Francisco,CA&zoom=13&size=600x300&maptype=roadmap&markers=size:mid%7Ccolor:red%7C225+Bush+St,San+Francisco,CA&key=AIzaSyB4Y7iIXkk5aVZ_exiNh1cVM2h1fya61mw" />
    )
  }
});

module.exports = GoogleMaps