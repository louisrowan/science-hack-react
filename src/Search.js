const React = require('react')
import { WithContext as ReactTags } from 'react-tag-input'
import $ from 'jquery'

const Search = React.createClass({
  getInitialState(){
    return {
      materials: [],
      data: '',
      experiments: '',
      tags: [],
      suggestions: ["Baking Soda", "Vinegar", "Container", "Balloon", "Empty Soda Bottle", "Drinking Straw", "Lemon Juice", "Baking Soda", "Water", "Gelatin", "Corn Syrup", "Measuring Spoons", "Fork", "Eggs", "Black Light", "Highlighter Pen", "Bottle Cap", "Dish Washing Liquid", "Glitter", "Agar Powder", "Cotton Swabs", "Newspaper", "Petri Dish", "Soda Can", "Wool", "Potato", "Straw", "Orange", "Bucket", "Sugar Cubes", "Drinking Glass", "Water", "Construction Paper", "Rubber Bands", "Thermometer", "Pencil"]
    }
  },
  handleDelete(i) {
        let tags = this.state.tags;
        tags.splice(i, 1);
        this.setState({tags: tags});
  },
  handleAddition(tag) {
        let tags = this.state.tags;
        tags.push({
            id: tags.length + 1,
            text: tag
        });
        this.setState({tags: tags});
  },
  handleDrag(tag, currPos, newPos) {
        let tags = this.state.tags;

        // mutate array
        tags.splice(currPos, 1);
        tags.splice(newPos, 0, tag);

        // re-render
        this.setState({ tags: tags });
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
    let tags = this.state.tags;
    let suggestions = this.state.suggestions;
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
        <div>
          <ReactTags tags={tags}
            suggestions={suggestions}
            handleDelete={this.handleDelete}
            handleAddition={this.handleAddition}
            handleDrag={this.handleDrag} />
          </div>
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