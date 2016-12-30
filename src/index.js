/* eslint-disable no-console */
import React from 'react'
import {render} from 'react-dom';
import App from './components/App'

let app = document.getElementById('main')
console.log('working')
render(<App />, app)
