/**
 * Created by ttnd on 27/12/16.
 */
import React from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import Counter from './Counter'

let store = configureStore()

export default class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          Lets react!
          <Counter />
        </div>
      </Provider>
    )
  }
}

