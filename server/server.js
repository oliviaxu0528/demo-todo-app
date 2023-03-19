const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.get('/home', (req, res) => {

res.sendFile(path.resolve('public/index.html'));
    // res.sendFile('../public/index.html', {root: __dirname })
})

app.get('/helloworld', (req, res) => {
    res.send('Hello world!')
});

app.get('/holamundo', (req, res) => {
      res.send('Hola Mundo!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})