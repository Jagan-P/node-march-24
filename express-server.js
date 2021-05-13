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
// app.use(bodyParser.urlencoded())
// app.use(bodyParser.raw({}));
app.use(bodyParser.json());
// app.use(express.json());

app.set('view engine', 'pug')

app.use(function (req, res, next) {
  console.log('Time:', Date.now())
  console.log(req.headers);
  next()
})

app.use('/user/:id', function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
})

app.get('/', (req, res) => {
  // res.send('Hello World!')
  // queryresults
  // res.render('index', { title: 'Hey', message: 'Hello there!' })

  res.sendFile("D:/Playground/node-march-24/custom.html");
})

app.get('/users',(req,res)=>{
    res.send("users");
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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})