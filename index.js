const   express = require('express'),
        path = require('path'),
        bodyParser = require('body-parser'),
        favicon = require('serve-favicon');

// Require route files
const index = require('./routes/index'), // Simple Routes
      contact = require('./routes/contact') // Contact Form Routes
      blog = require('./routes/blog')

let app = express();

// View Engine Setup ===============================================================
app.set('views', path.join(__dirname, 'views'))
    .set('view engine', 'pug');

// Middleware ======================================================================
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: false}))
    .use(express.static(path.join(__dirname, 'public'))) // setting location for static assets


// Routers =========================================================================
app.use('/', index)
  .use('/contact', contact)
  .use('/blog', blog)


// Run the thing! Yay
app.listen(8080)
console.log('Server is running at port 8080')
