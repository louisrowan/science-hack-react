const React = require('react')
const ShowHeader = require('./ShowHeader')
import $ from 'jquery'

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
    var path = this.props.location.pathname
    path = path.slice(-1)
    var request = $.ajax({
      url: 'http://rainydayscience.herokuapp.com/',
      dataType: 'json'
    })
     request.done(function(r){
      path = parseInt(path)
      const data = r.filter((d) => (d.id === path))
      that.setState({ data: data[0] })
    })
    var materialRequest = $.ajax({
      url: 'http://rainydayscience.herokuapp.com/static_pages/material',
      dataType: 'json'
    })
    materialRequest.done(function(r){
      console.log(r)
      path = parseInt(path)
      const materials = r.filter((d) => (d.experiment_id == path))
      that.setState({ materials: materials })
    })
  },
  formChange: function(e){
    this.setState({ comment: e.target.value })
  },
  formSubmit: function(){
    const appendText = `<div className='comment'><p>${this.state.comment}</p><h6>5 hrs ago</h6>`
    this.setState({ enteredComments: this.state.enteredComments += appendText, comment: ''})
  },
  createMarkup: function(){
    return {__html: this.state.enteredComments}
  },
  render(){
    let materialData
    if (this.state.materials) {
      materialData = this.state.materials.map((m, i) => (<div className='materials-div-double' key={i}><div className='materials-img-div'><img src={m.info} /></div><div className='materials-div-name'>{m.name}</div></div>))
    } else {
      materialData = ''
    }

    let procedureData
    if (this.state.data.procedure){
      const split = this.state.data.procedure.split(',')
      console.log(split)
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
        <div className='show-procedure'>
          <h2>Procedure</h2>
          <ol className='procedure-list'>
          {procedureData}
          </ol>
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
        <form onSubmit={this.formSubmit}>
          <h5>Comment</h5>
          <textarea rows="4" cols="50" value={this.state.comment} onChange={this.formChange} /><br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
})

module.exports = Show