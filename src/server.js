'use strict'

require('dotenv').config()
import 'babel-polyfill'
import path from 'path'
import express from 'express'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import logger from './util/logger'
import { port } from './config'
import jade from 'jade'
import assets from './assets'

const server = global.server = express()
let morgan = require('morgan')
morgan.token('remote-addr', (req, res) => {
  return req.headers['x-forwarded-for'] || req.connection.remoteAddress
})

//
// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------
global.navigator = global.navigator || {}
global.navigator.userAgent = global.navigator.userAgent || 'all'

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
server.use(express.static(path.join(__dirname, 'public'), { maxAge: 3600000 }))
server.use(cookieParser())
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

//
// Only use morgan logger in production
// -----------------------------------------------------------------------------
if (process.env.NODE_ENV === 'production') {
  server.use(morgan('combined'))
}

server.get('/health-check', (req, res) => {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
  res.header('Expires', '-1')
  res.header('Pragma', 'no-cache')
  res.status(200)
  res.send(`All Good <br /> ${new Date()}`)
})

server.get('*', (req, res, next) => {
  console.log(assets.index.js)
  const template = jade.compile(require('./view/index.jade.js'))
  const data = {
    title: 'React Redux BAsic App',
    description: 'A simple started app for react redux apps',
    entry: assets.index.js,
    stylesheet: assets.index.css,
  }
  res.send(template(data))
})

//
// Error handling
// -----------------------------------------------------------------------------
// 404 - when nothing handles this request (without error)
server.use((req, res) => {
  res.status(404)
  res.send('404')
})

// Other Server Errors
server.use((error, req, res, next) => { // eslint-disable-line no-unused-vars
  logger.error(error)
  const statusCode = error.status || 500
  res.status(statusCode)
  res.send('500')
})

server.listen(port, () => {
  logger.info(`The server is running at http://localhost:${port}/ in ${process.env.NODE_ENV} mode`)
})
