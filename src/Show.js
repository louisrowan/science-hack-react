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

        <h3 className='commentsh3'>Comments</h3>
        <div className='comments'>
          <div className='comment'>
            <p>This is an amazing experiment!</p>
            <h6>Post: 3 hrs ago</h6>
          </div>
          <div className='comment'>
            <p>How did you do this?</p>
            <h6>Post: 5 hrs ago</h6>
          </div>
          <div className='comment'>
            <p>The intricacy behind the creation of this experiment is absolutely astounding.  Keep up the good work bra.</p>
            <h6>Post: 5 hrs ago</h6>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = Show