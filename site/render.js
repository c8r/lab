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
const Thanks = require('./Thanks')
const toHTML = require('./toHTML')

const build = ({
  Component,
  dirname
}) => {
  const body = renderToStaticMarkup(
    React.createElement(Component)
  )
  const css = cxs.css()
  const html = toHTML({
    body,
    css
  })
  const filename = path.join(__dirname, '..', dirname, 'index.html')
  fs.writeFileSync(filename, html)
}

const pages = [
  {
    Component: App,
    dirname: '/'
  },
  {
    Component: Thanks,
    dirname: '/thanks/'
  },
]

pages.forEach(build)

