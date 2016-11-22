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
          <p><b>Experiment Name</b></p><br />
          <input type="text" name="name" placeholder="Experiment Name" /><br />
          <p><b>Procedure</b></p><br />
          <input type="text" name="procedure" placeholder="Procedure" /><br />
          <p><b>Video URL</b></p><br /> 
          <input type="text" name="video" placeholder="Video url" /><br />
          <p><b>Discipline</b></p><br /> 
          <input type="text" name="discipline" placeholder="Discipline" /><br />
          <textarea name="explanation" placeholder="Describe your experiment" rows="6" cols="50" /><br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
});

module.exports = NewExperiment