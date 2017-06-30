const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const favicon = require('serve-favicon')

// Require route files
const index = require('./routes/index') // Simple Routes
const contact = require('./routes/contact') // Contact Form Routes
const blog = require('./routes/blog')

let app = express()

// View Engine Setup ===============================================================
app.set('views', path.join(__dirname, 'views'))
  .set('view engine', 'pug')

// Middleware ======================================================================
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
  .use(bodyParser.json())
  .use(express.static(path.join(__dirname, 'public'))) // setting location for static assets

// Routers =========================================================================
app.use('/', index)
  .use('/contact', contact)
  .use('/blog', blog)

// Run the thing! Yay
app.listen(8080)
console.log('Server is running at port 8080')
