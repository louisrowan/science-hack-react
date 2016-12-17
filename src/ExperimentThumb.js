const React = require('react')
const Link = require('react-router').Link
const { connect } = require('react-redux')
const { setExperiment } = require('./redux/actionCreators')

const ExperimentThumb = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  handleClick(){
    console.log(this.props.data.id)
    this.props.dispatchSetExperiment(this.props.data.id)
    console.log(this.context.router)
    this.context.router.push('/show/' + this.props.data.id)
  },
  render(){
    return (
        <div className='index-experiment-thumb'>
          <Link onClick={ () => this.handleClick() }>
            <h1>{this.props.data.name}</h1>
            <p>{this.props.data.discipline}</p>
            <img src={this.props.data.picture} role='presentation'/>
          </Link>
        </div>
    )
  }
})

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSetExperiment (currentExperiment) {
      dispatch(setExperiment(currentExperiment))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    currentExperiment: state.currentExperiment
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(ExperimentThumb)