import {expect} from 'chai'
import React from 'react'
import ReactDOM from 'react-dom'
import HelloWorld from '../../src/components/HelloWorld'
import configureStore from '../../src/store/configureStore'
import renderPage from '../tools/renderPage'

describe('Hello World component', function () {
  before(async function () {
    this.store = configureStore();
    this.page = await renderPage(this.store, <HelloWorld />)
  })

  after(function () {
    ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this.page.get(0)).parentNode)
  })

  it('Should render hello world component', function () {
    expect(this.page.find('.heading').at(0).length).eq(1)
  })
})
