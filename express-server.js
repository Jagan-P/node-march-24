const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.raw({}));
// app.use(bodyParser.json({}));
// app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users',(req,res)=>{
    res.send("users");
});

app.post('/users',(req,res)=>{
    console.log(req.body); 
    res.send("post users");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})