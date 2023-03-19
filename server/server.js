const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.use(express.static('build'));

var bodyParser = require('body-parser');
app.use(bodyParser.json())

app.get('/home', (req, res) => {
  res.sendFile(path.resolve('build/index.html'));
})

app.get('/helloworld', (req, res) => {
    res.send('Hello world!')
});

app.get('/holamundo', (req, res) => {
      res.send('Hola Mundo!')
});

app.post('/todo', (req, res) => {
  console.log(req.body);


  res.send('You hit the route');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})