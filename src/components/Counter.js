import React, { Component } from 'react'
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
    count: state.counter.count
  }
}

export default connect(
  mapStateToProps
)(Counter)



