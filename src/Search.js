const React = require('react')
import $ from 'jquery'

const Search = React.createClass({
  getInitialState(){
    return {
      materials: [],
      data: '',
      experiments: ''
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
    const rawMaterials = ['wood', 'aluminum', 'toilet paper roll', 'baking soda']
    let showExperiments
    if (this.state.experiments.length > 0) {

      var filtered = this.state.data.filter((m) => (this.state.materials.indexOf(m.name) !== -1))



      var exFiltered = filtered.map((d) => (
        d.experiment_id
        ))

      var final = this.state.experiments.filter((e) => (exFiltered.indexOf(e.id) !== -1))

        console.log(final)


      showExperiments = final.map((d, i) => (
        <div className='index-show-experiment' key={i}>
          <h1>{d.name}</h1>
          <p>{d.discipline}</p>
          <img src={`http://${d.picture}`} />
        </div>
        ))


    }
     else {
      showExperiments = ''
    }
    return (
      <div className='search-container'>
        <div className='materials-boxes-div'>
          <form>

          {rawMaterials.map((m, i) => (      
              <label key={i}><input id={m} type='checkbox' onChange={this.handleChange} />{m}</label>
          ))}
      
          </form>
          <ul>
          {this.state.materials.map((e, i) => {
            return <li key={i}>{e}</li>
          })}
          </ul>
        </div>
        <div className='experiments-index'>
          <a href='/#/show/3'><p>test 1</p></a>
        </div>
        <div className='all-shown-experiments'>
        {showExperiments}
        </div>
      </div>
    )
  }
})

module.exports = Search