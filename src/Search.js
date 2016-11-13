const React = require('react')
import $ from 'jquery'

const Search = React.createClass({
  getInitialState(){
    return {
      materials: [],
      data: '',
      experiments: '',
    }
  },
  handleChange(e){
    const newField = e.target.id
    if (document.getElementById(e.target.id).checked){
      this.setState({ materials: this.state.materials.concat([newField])})
    } else {
      const materials = this.state.materials.filter(function(e){
        return e !== newField
      })
      this.setState({ materials: materials })
    }
  },
  componentWillMount: function(){
    var that = this
    var request = $.ajax({
      url: 'http://rainydayscience.herokuapp.com/',
      dataType: 'json'
    })
     request.done(function(r){
      that.setState({ experiments: r })
    })
    var materialRequest = $.ajax({
      url: 'http://rainydayscience.herokuapp.com/static_pages/material',
      dataType: 'json'
    })
    materialRequest.done(function(r){
      that.setState({ data: r})
    })
  },
  render(){
    let boxes;
    if (this.state.data){
          boxes = this.state.data.map((m, i) => (
            <div className='label-div' key={i}><div className='materials-list-pic-div'><img src={m.info} /></div><div className='materials-list-check'><input id={m.name} type='checkbox' onChange={this.handleChange} />{m.name}</div></div>
          ))
    } else {
      boxes = ''
    }

    let showExperiments

    if (this.state.experiments.length > 0) {
      var filtered = this.state.data.filter((m) => (this.state.materials.indexOf(m.name) !== -1))
      var exFiltered = filtered.map((d) => (
        d.experiment_id
        ))
      var final = this.state.experiments.filter((e) => (exFiltered.indexOf(e.id) !== -1))
      showExperiments = final.map((d, i) => (
        <div className='index-experiment-thumb'>
        <a href={`/#/show/${d.id}`} key={i}>
          <h1>{d.name}</h1>
          <p>{d.discipline}</p>
          <img src={d.picture} role='presentation'/>
        </a>
        </div>
        ))
    }
     else {
      showExperiments = ''
    }
    return (
      <div className='search-container'>
        <div className='materials-boxes-div'>
          <form className='frontpage-boxes'>

          {boxes}

          </form>
          <p className='clearfix'></p>
        </div>
        <div className='all-shown-experiments'>
        {showExperiments}
        </div>
      </div>
    )
  }
})

module.exports = Search