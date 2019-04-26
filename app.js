
const express = require("express");
const app = express();
const bodyParser = require('body-parser'); //body-parser extract the entire body portion of an incoming request stream and exposes it on req.body .
const morgan = require('morgan'); //Morgan is another HTTP request logger middleware for Node.js. It simplifies the process of logging requests to your application.
//const {layout, notFoundPage, errorPage} = require('./views')
// const students = require('./routes/students');
// const tests = require('./routes/tests');

const path = require("path");

//app.use(bodyParser.json()) basically tells the system that you want json to be used. 
//bodyParser.urlencoded({extended: ...}) basically tells the system whether you want to use a simple algorithm
// for shallow parsing (i.e. false) or complex algorithm for deep parsing that can deal with nested objects (i.e. true).
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev')); //every http requests use this
app.use(express.static(path.join(__dirname, "./public"))); //serving up static files (e.g. css files)

app.use("/wiki", require("./routes/wiki"))
app.use("/users", require("./routes/users"))

//take all the requests 
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '/wikistackCopy/public/stylesheets/index.html'))
})


// app.use((req, res, next) => {
//   res.status(404).send('notFoundPage(will add page later soon)')
// })

// app.use((err, req, res, next)=>{
//   console.error(err.stack)
//   res.status(500).send('errorPage(err)')
// })

// app.get('/', function (req, res) {
//   res.redirect("/wiki")
// });

module.exports = app