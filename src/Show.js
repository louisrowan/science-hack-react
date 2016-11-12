const React = require('react')

const Show = React.createClass({
  render(){
    return (
      <div className='showbg'>
        <h1>Experiment Show</h1>
        <div className='img-border'>
          <div className='img'></div>
          <div className='img-description'>
            <div className='descriptionh2'>
              <h2>Description</h2>
            </div>
            <p> aidsjfalsdjf </p>
            <p> aidsjfalsdjf </p>
            <p> aidsjfalsdjf </p>
            <p> aidsjfalsdjf </p>
            <p> aidsjfalsdjf </p>
          </div>
        </div>

        <h3 className='comments'>Comments</h3>
      </div>
    )
  }
})

module.exports = Show