const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const fs = require('fs');

app.use(express.static('build'));
var bodyParser = require('body-parser');
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.sendFile(path.resolve('../build/index.html'));
})

app.get('/helloworld', (req, res) => {
    res.send('Hello world!')
});

app.get('/holamundo', (req, res) => {
      res.send('Hola Mundo!')
});

app.post('/todo', (req, res) => {
  fs.readFile('count.txt', 'utf8', function(err, count) {
    if (count === undefined) {
      fs.writeFile('server/count.txt', '1', ()=>{
        console.log('Created count txt file');
      });
    }
    count = count || 1;
    count = Number(count);
    fs.writeFile(`server/todoItems/${count}.txt`, req.body.todo, ()=>{
      console.log('Created new todo txt file');
      fs.writeFile('server/count.txt', `${count + 1}`, ()=>{
        console.log('Updated txt file');
      });
    });
  });
  res.send('You hit the route');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})