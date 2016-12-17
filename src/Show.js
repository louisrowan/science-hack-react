const React = require('react')
const ShowHeader = require('./ShowHeader')
import ReactPlayer from 'react-player'
import $ from 'jquery'
const { connect } = require('react-redux')

const Show = React.createClass({
  getInitialState: function(){
    return {
      data: '',
      materials: '',
      comment: '',
      enteredComments: ''
    }
  },
  componentWillMount: function(){
    var that = this
    // var path = this.props.location.pathname
    // path = path.match(/\d+$/)
    // path = path[0]
    var request = $.ajax({
      url: 'http://rainydayscience.herokuapp.com/',
      dataType: 'json'
    })
     request.done(function(r){
      console.log(r)
      // path = parseInt(path, 10)
      const data = r.filter((d) => (d.id === that.props.currentExperiment ))
      that.setState({ data: data[0] })
    })
    var materialRequest = $.ajax({
      url: 'http://rainydayscience.herokuapp.com/static_pages/material',
      dataType: 'json'
    })
    materialRequest.done(function(r){
      console.log(r)
      // path = parseInt(path, 10)
      const materials = r.filter((d) => (d.experiment_id === that.props.currentExperiment ))
      that.setState({ materials: materials })
    })
  },
  formChange: function(e){
    this.setState({ comment: e.target.value })
  },
  formSubmit: function(){
    const appendText = `<div className='comment'><p>${this.state.comment}</p><h6>5 hrs ago</h6>`
    var text = this.state.enteredComments
    this.setState({ enteredComments: text += appendText, comment: ''})
  },
  createMarkup: function(){
    return {__html: this.state.enteredComments}
  },
  toggleExplanation: function(){
    $('#hidden-explanation-p').toggle()
  },
  render(){
    console.log(this.props.currentExperiment)
    let materialData
    if (this.state.materials) {
      materialData = this.state.materials.map((m, i) => (<div className='materials-div-double' key={i}><div className='materials-img-div'  role='presentation' ><img src={m.info}  role='presentation' /></div><div className='materials-div-name'>{m.name}</div></div>))
    } else {
      materialData = ''
    }

    let procedureData
    if (this.state.data.procedure){
      const split = this.state.data.procedure.split(',')
      procedureData = split.map((p, i) => (
        <li key={i}>{p.replace(/["[\]]/g, '')}</li>
      ))
    }
    return (
      <div className='showbg'>
        <ShowHeader picture={this.state.data.picture}
        name={this.state.data.name}
        rating={this.state.data.rating}
        description={this.state.data.description} />
        <div className='materials-div'>
          <h2>Materials</h2>
          {materialData}
        </div>

        <div className='video-show-div'>
        <center><ReactPlayer url={this.state.data.video_url} /></center>
        </div>

        <div className='show-procedure'>
          <h2>Procedure</h2>
          <ol className='procedure-list'>
            {procedureData}
          </ol>
        </div>
        <div className='show-explanation-div'>
          <h3 onClick={this.toggleExplanation}>How does it work?</h3>
          <p id='hidden-explanation-p'>{this.state.data.explanation}</p>
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
          <div dangerouslySetInnerHTML={this.createMarkup()}></div>
        </div>
        <div className='comment-form-div'>
        <form onSubmit={this.formSubmit}>
          <h5>Add Comment</h5>
          <textarea rows="4" cols="50" value={this.state.comment} onChange={this.formChange} /><br />
          <input type="submit" value="Submit" />
        </form>
        </div>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    currentExperiment: state.currentExperiment
  }
}

module.exports = connect(mapStateToProps)(Show)