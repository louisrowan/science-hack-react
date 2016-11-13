const React = require('react')

const Show = React.createClass({
  render(){
    return (
      <div className='showbg'>
        <div className='img-border'>
          <div className='img'></div>
          <div className='img-description'>
            <div className='descriptionh2'>
              <h2>Description</h2>
              <p><b>Rating</b>: 9.4/10</p>
            </div>
            <p>The tag defines a multi-line text input control.  A text area can hold an unlimited number of characters, and the text renders in a fixed-width font (usually Courier).  The size of a text area can be specified by the cols and rows attributes, or even better; through CSS' height and width properties. </p>
            <div className='materials'>
              <h3>Materials</h3>
              <p>Aluminum Foil, Glue, Stick, Hat</p>
            </div>
          </div>
        </div>

        <h4 className='commentsh3'>Comments</h4>
        <div className='comments'>
          <div className='comment'>
            <p>This is an amazing experiment!</p>
            <h6>3 hrs ago</h6>
          </div>
          <div className='comment'>
            <p>How did you do this?</p>
            <h6>5 hrs ago</h6>
          </div>
          <div className='comment'>
            <p>The intricacy behind the creation of this experiment is absolutely astounding.  Keep up the good work bra.</p>
            <h6>5 hrs ago</h6>
          </div>
        </div>
        <form action="demo_form.asp">
          <h5>Comment</h5>
          <textarea rows="4" cols="50" /><br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
})

module.exports = Show