var http = require('http');
var module = require('module');

var path  = require('path')
// var logger = require('morgan');
var express = require('express');
var app = module.exports = express();

var httpServer = http.createServer(app);
// const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static(path.join(__dirname, 'routes')));

// app.set('views', __dirname + '/views'); // general config
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  //   res.sendFile(__dirname + "/Apply.html");
  res.render('index');
});

app.get("/index", (req,resdy)=>{
 res.render('admin');
});

app.get("/admin", (req,res) => {
  console.log('asjkxh');
  res.render('admin');
 });

 app.get("/apply", (req, res) => {
  res.render('apply');
 });


 app.post('/apply', (req, res) => {
  
  console.log('wed');
  let data = req.body;
//   var Name= req.body.Name;
// var Add = req.body.Add;
// var Salary = req.body.Salary;
// var Mobileno= req.body.Mobileno;
//   var  data =[ {
//     name: "",
//     address: "",
//     Salary:"",
//     mobileno:""
// }];
// var  JSONString = JSON.stringify(data).writefile('./inputdata.json',JSONString, err => {
//     if (err) {
//         console.log('Error writing file', err);
//     } else {
//         console.log('Successfully wrote file');
//     }
// });
  

  res.send('data ' + JSON.stringify(data));
});




app.listen(4000, () => {

  console.log('Server running');


});

// app.listen(4000);
module.exports = express();