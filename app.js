var http = require('http');
var module = require('module');

var path  = require('path')
// var logger = require('morgan');
var express = require('express');
var app = module.exports = express();

var httpServer = http.createServer(app);
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', __dirname + '/views'); // general config
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  //   res.sendFile(__dirname + "/Apply.html");
  res.render('index');
});

// app.get("/", (req.body)=>{
//  res.render('Admin');
// });

// app.post("/index", (req,res) => {
//   // console.log('asjkxh');
//   res.render('admin');
//  });

//  app.post("/apply", (req, res) => {
//   res.send('all is well');
//  });


// app.post("/", (req, res) => {
//   res.render('admin');
//  });


app.use('/static', express.static(path.join(__dirname, 'routes')));

app.listen(4000, () => {

  console.log('Server running');


});

// app.listen(4000);
module.exports = express();