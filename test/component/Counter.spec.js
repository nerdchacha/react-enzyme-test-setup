import {expect} from 'chai'
import React from 'react'
import ReactDOM from 'react-dom'
import Counter from '../../src/components/Counter'
import configureStore from '../../src/store/configureStore'
import renderPage from '../tools/renderPage'
import sleep from 'sleep-promise'

describe('Counter', function () {
  before(async function () {
    this.store = configureStore()
    this.page = await renderPage(this.store, <Counter />)
  })

  after(function () {
    ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this.page.get(0)).parentNode)
  })

  it('counter value should increment on click', async function () {
    let incrementButton = this.page.find('.increment').at(0)
    incrementButton.simulate('click')
    await sleep(PAGE_TIMEOUT)
    expect(this.page.find('.counter-value').at(0).text()).eq('1')
  })
})
