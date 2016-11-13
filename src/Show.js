const React = require('react')
import $ from 'jquery'

const Show = React.createClass({
  getInitialState: function(){
    return {
      data: '',
      materials: ''
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
  render(){
    console.log(this.state)
    let materialData
    if (this.state.materials) {
      materialData = this.state.materials.map((m, i) => (<div className='materials-div-double' key={i}><div className='materials-img-div'><img src={m.info} /></div><div className='materials-div-name'>{m.name}</div></div>))
    } else {
      materialData = ''
    }
    return (
      <div className='showbg'>
        <div className='img-border'>
          <div className='img'><img src={this.state.data.picture} className='show-img' /></div>
          <div className='img-description'>
            <div className='descriptionh2'>
              <h2>{this.state.data.name}</h2>
              <p><b>Rating</b>: {this.state.data.rating}</p>
            </div>
            <p>{this.state.data.description}</p>
          </div>
        </div>
        <div className='materials-div'>
          <h2>Materials</h2>
          {materialData}
        </div>
        <div className='show-procedure'>
          <h2>Procedure</h2>
          <ul>
          {this.state.data.procedure}
          </ul>
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