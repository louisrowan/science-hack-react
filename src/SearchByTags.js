import React from 'react';
import { WithContext as ReactTags } from 'react-tag-input';
import $ from 'jquery';

const SearchByTags = React.createClass({
  getInitialState() {
        return {
            tags: [],
            suggestions: ["Baking Soda", "Vinegar", "Container", "Balloon", "Empty Soda Bottle", "Drinking Straw", "Lemon Juice", "Baking Soda", "Water", "Gelatin", "Corn Syrup", "Measuring Spoons", "Fork", "Eggs", "Black Light", "Highlighter Pen", "Bottle Cap", "Dish Washing Liquid", "Glitter", "Agar Powder", "Cotton Swabs", "Newspaper", "Petri Dish", "Soda Can", "Wool", "Potato", "Straw", "Orange", "Bucket", "Sugar Cubes", "Drinking Glass", "Construction Paper", "Rubber Bands", "Thermometer", "Pencil"],
            materialData: [],
            experiments: []
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
    componentWillMount: function() {
      var that = this;
      var request = $.ajax({
        url: 'http://rainydayscience.herokuapp.com/',
        dataType: 'json'
      });
      request.done(function(r) {
        that.setState({ experiments: r });
      });
      var materialRequest = $.ajax({
        url: 'http://rainydayscience.herokuapp.com/static_pages/material',
        dataType: 'json'
      });
      materialRequest.done(function(r) {
        that.setState({ materialData: r });
      });
    },
    render() {
        let tags = this.state.tags;
        let suggestions = this.state.suggestions;

        let showExperiments

        if (this.state.experiments) {
          var tagsText = this.state.tags.map((t) => t.text)
          console.log(this.state.tags)
          var filtered = this.state.materialData.filter((m) =>(tagsText.indexOf(m.name) !== -1))
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
        } else {
          showExperiments = ""
        }


        return (
            <div id='search-by-tags' className='search-container'>
                <ReactTags tags={tags}
                    suggestions={suggestions}
                    handleDelete={this.handleDelete}
                    handleAddition={this.handleAddition}
                    handleDrag={this.handleDrag} />
                    <div className='all-shown-experiments'>
                      {showExperiments}
                    </div>
            </div>
        )
    }
});

module.exports = SearchByTags