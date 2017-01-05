global.__DEV__ = false

let noop = () => {
  return null
}

//Run test files using ES6
require('babel-register')()

let jsdom = require('jsdom')

///Do not require files with extension while testing
require.extensions['.scss'] = noop
require.extensions['.css'] = noop
require.extensions['.png'] = noop
require.extensions['.svg'] = noop

//Set browser object on global
global.document = jsdom.jsdom({src: '<!doctype html><html><body></body></html>'})
global.window = document.defaultView
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = document.defaultView[property]
  }
})
global.navigator = {userAgent: 'Mocha Test node.js'}
