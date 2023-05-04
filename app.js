var http = require('http');
var module = require('module');
const fs = require('fs');

var path = require('path')
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
app.set("views",path.join("views"));

app.get("/", (req, res) => {
  //   res.sendFile(__dirname + "/Apply.html");
  res.render('index');
});

// app.get("/index", (req, res) => {
//   res.render('admin');
// });

app.get("/admin", (req, res) => {
  console.log('asjkxh');
  res.render('admin');
});

app.get("/apply", (req, res) => {
  res.render('apply');
});
app.get("/admin", (req, res) => {
  res.render('index');
});

// app.get("/login",(req,res)=>{
//   res.render('index');
// })





app.post('/priti', (req, res) => {

  console.log(req.body);
  const d = JSON.stringify(req.body);
  console.log(d);
  fs.writeFile("new.json", d, (err, data) => {
    if (err) {
      // throw err;
      return res.status(400).send("error");
    }
    return res.status(200).send("Success");
  });
  // console.log('wed');
  // let data = req.body;
  // console.log(data);
  // //   var Name= req.body.Name;
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
});









app.listen(4000, () => {

  console.log('Server running');


});

// app.listen(4000);
module.exports = express();