const http = require('http')
const fs = require('fs')
const port = require('minimist')(process.argv.slice(2), {
  port: ''
})

let homeContent = ''
let projectContent = ''
let registration = ''
fs.readFile('home.html', (err, home) => {
  if (err) {
    throw err
  }
  homeContent = home
})
fs.readFile('project.html', (err, project) => {
  if (err) {
    throw err
  }
  projectContent = project
})
fs.readFile('registration.html', (err, reg) => {
  if (err) {
    throw err
  }
  registration = reg
})

http.createServer((req, res) => {
  const url = req.url
  res.writeHeader(200, { 'content-type': 'text/html' })
  switch (url) {
    case '/project':
      res.write(projectContent)
      res.end()
      break
    case '/registration':
      res.write(registration)
      res.end()
      break
    default:
      res.write(homeContent)
      res.end()
      break
  }
})
  .listen(port)
