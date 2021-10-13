const express = require('express')
const app = express()
const path = require('path')
const hbs = require("hbs");
const port = process.env.PORT || 3000;

// set hbs view engine
app.set('view engine', 'hbs');

// set static foler 
app.use(express.static('static'))




// set path of static folder
app.use('/views', express.static(path.join(__dirname, 'views')))

hbs.registerPartials(__dirname + '/views/partials');

app.get('/', function (req, res) {
    res.render('home', { title: 'Architecture', message: 'Hello there!' })
  })

  app.get('/contact', function (req, res) {
    res.render('contact', { title: 'contact', message: 'Hello there!' })
  })

  app.get('/project', function (req, res) {
    res.render('project', { title: 'Project', message: 'Hello there!' })
  })

  app.get('/about', function (req, res) {
    res.render('about', { title: 'About', message: 'Hello there!' })
  })

  app.get('/blog', function (req, res) {
    res.render('blog', { title: 'Blog', message: 'Hello there!' })
  })

  app.get('/pages', function (req, res) {
    res.render('pages', { title: 'Pages', message: 'Hello there!' })
  })
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})