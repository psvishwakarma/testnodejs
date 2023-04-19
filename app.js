var http = require('http');  
var module = require("module")
// var logger = require('morgan');
var express = require('express');
var app =  module.exports = express();

var httpServer = http.createServer(app);
// const app = express();
 
app.use(express.json());       
app.use(express.urlencoded({extended: true})); 

app.set('views', __dirname + '/views'); // general config
app.set('view engine', 'ejs');
 
app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/Apply.html");
console.log("YES IM  IN");
res.render('index');
});
 
app.post("/Apply", (req, res) => {

	console.log("Priti function", req.body);
//   const name = req.body.name;
//   const Add = req.body.Add;
//   const date=req.body.date;
//   console.log("name: " + name);
//   console.log("Add: " + Add);
//   console.log("date: " + date);
  res.send("Data received");
});
 
app.listen(4000, () => {

    console.log('Server running');


});
module.exports = app;

// app.listen(4000);