/*
For raw data, the header 'Content-Type': 'application/json' should be set in the request
and middlewares like bodyParser.json() can be used to parse the request body

For x-www-form-urlencoded no seperate headers are required and a middleware like bodyParser.urlencoded() can be used to parse the request body

For form-data the request body is multipart and hence a middleware like multer (multer.none()) is used to parse the request body

*/

const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')
const multer = require('multer');
const upload = multer();
var cookieParser = require('cookie-parser');
var session = require('express-session');
var jwt = require('jsonwebtoken');
var cors = require('cors')
const mongoose = require('mongoose');
const Cat = require('./mongoose-models').Cat;
app.use(cors())
// app.use(bodyParser.urlencoded())
// app.use(bodyParser.raw({}));
app.use(bodyParser.json());
// app.use(express.json());

app.use(express.static('public'));

app.set('view engine', 'pug')

app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));

app.use(function (req, res, next) {
  // console.log('Time:', Date.now())
  // console.log(req.headers);
  // console.log(req.headers.authorization.replace("Bearer "));

  // let decodedData;
  // if(req.headers.authorization) {
  //   decodedData = jwt.verify(req.headers.authorization.replace("Bearer ", ""), 'shhhhh')
  // }
  // if(decodedData && decodedData.username=="jagan" || req.originalUrl=="/login") {
  //   next()
  // }
  // else {
  //   // res.redirect("/login.html");
  //   res.sendStatus(401).send("You are not authorized");
  // }
  next();
})

app.use('/user/:id', function (req, res, next) {
  // console.log('Request Type:', req.method)
  next()
})

app.post("/login",
 function(req, res) {
  console.log(req.body);
  // if(req.body.username=="jagan" && req.body.pin=="1234") {
  //   req.session.username="jagan";
  //   res.redirect("/users");
  // }
  // else {
  //   res.redirect("/login.html");
  // }

  if(req.body.username=="jagan" && req.body.pin=="1234") {
    var token = jwt.sign({username: req.body.username}, 'shhhhh');
    console.log(typeof(token), token);
    res.type('plain/text').send(token);
  }
});

app.get('/', (req, res) => {
  // res.send('Hello World!')
  // queryresults
  // res.render('index', { title: 'Hey', message: 'Hello there!' })

  // res.sendFile("D:/Playground/node-march-24/custom.html");
  res.cookie("username", "ABC").send("Cookies are set");
})

app.get('/users',(req,res)=>{
    // console.log(req.cookies)
    console.log(req.session.page_views)
    if(req.session.page_views){
      req.session.page_views++;
      res.send("You visited this page " + req.session.page_views + " times");
   } else {
      req.session.page_views = 1;
      res.send("Welcome to this page for the first time!");
   }
    // res.send("users");
});

app.post('/users'
    ,upload.none()
    ,(req,res)=>{
    console.log("route handler"); 
    // res.send("post users");
});

app.use('/users', function (req, res, next) {
  console.log('End', req.method)
  next()
})

app.get('/cats', function (req, res) {
  Cat.find({
  }, (err, data)=>{
    console.log(err, data);
    
    res.send(data);
  })
})

app.post('/cats', function (req, res) {
  console.log(req.body);

  let cat = new Cat(req.body);

  cat.save((err, data)=>{
    console.log(err, data);

    res.send(data);
  })
})

app.delete('/cats/:id', function(req, res) {
  console.log("data",req.params.id);
  Cat.findOneAndDelete({
    _id: req.params.id
  }, (err, data)=>{
    res.send(data);
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})