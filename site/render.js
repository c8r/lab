require('babel-register')({
  presets: [
    'react'
  ]
})
const fs = require('fs')
const path = require('path')
const React = require('react')
const { renderToStaticMarkup } = require('react-dom/server')
const cxs = require('cxs')
const App = require('./App')
const toHTML = require('./toHTML')

const body = renderToStaticMarkup(
  React.createElement(App)
)

const css = cxs.css()

const html = toHTML({
  body,
  css
})

const filename = path.join(__dirname, '../index.html')

fs.writeFileSync(filename, html)
