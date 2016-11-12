const React = require('react')

const Search = React.createClass({
  getInitialState(){
    return {
      materials: []
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
  render(){
    console.log(this.state.materials)
    const rawMaterials = ['wood', 'aluminum', 'nails', 'baking soda']
    return (
      <div className='search-container'>
        <div id='search-bars'>
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
          <a href='/#/show'><p>test 1</p></a>
        </div>


      </div>
    )
  }
})

module.exports = Search