const React = require('react')

const ShowHeader = React.createClass({
  render(){
    return (
      <div className='img-border'>
        <div className='img'>
          <img src={this.props.picture} className='show-img' />
        </div>
        <div className='img-description'>
           <div className='descriptionh2'>
            <h2>{this.props.name}</h2>
            <p><b>Rating</b>: {this.props.rating}</p>
          </div>
          <p>{this.props.description}</p>
        </div>
      </div>
    )
  }
})

module.exports = ShowHeader