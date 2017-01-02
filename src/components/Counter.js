import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../actions'

class Counter extends Component {
  render(){
    let {dispatch} = this.props
    const handleIncrement = () => {
      dispatch(increment())

    }
    const handleDecrement = () => {
      dispatch(decrement())
    }
    return(
      <div>
        Current counter value = {this.props.count}
        &nbsp;
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    count: state.counter.count,
  }
}

Counter.propTypes = {
  dispatch: PropTypes.func ,
  count: PropTypes.number.isRequired,
}

Counter.defaultProps = {
  count: 0,
}

export default connect(
  mapStateToProps
)(Counter)



