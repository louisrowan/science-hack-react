const React = require('react')
import $ from 'jquery'

const NewExperiment = React.createClass({
  render(){
    return (
      <div className='newExperiment'>
        <div className='experiment-h1-bg'>
          <h1>Create Experiment</h1>
        </div>
        <form action="#" className="clearform">
          Experiment Name<br />
          <input type="text" name="name" placeholder="Experiment Name" /><br />
          Procedure<br />
          <input type="text" name="procedure" placeholder="Procedure" /><br />
          Video URL<br /> 
          <input type="text" name="video" placeholder="Video url" /><br />
          Discipline<br /> 
          <input type="text" name="discipline" placeholder="Discipline" /><br />
          <textarea name="explanation" placeholder="Describe your experiment" rows="6" cols="50" /><br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
});

module.exports = NewExperiment