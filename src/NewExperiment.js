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
          <b>Experiment Name</b><br />
          <input type="text" name="name" placeholder="Experiment Name" /><br />
          <b>Procedure</b><br />
          <input type="text" name="procedure" placeholder="Procedure" /><br />
          <b>Video URL</b><br /> 
          <input type="text" name="video" placeholder="Video url" /><br />
          <b>Discipline</b><br /> 
          <input type="text" name="discipline" placeholder="Discipline" /><br />
          <textarea name="explanation" placeholder="Describe your experiment" rows="6" cols="50" /><br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
});

module.exports = NewExperiment