import {expect} from 'chai'
import counterReducer from '../../src/reducers/counter'
import {increment} from '../../src/actions'

describe('Reducer: Counter', function () {
  it('should return empty response for no result for receive action', function () {
    const nextState = counterReducer({count: 0}, increment())
    expect(nextState.count).to.eq(1)
  })
})
