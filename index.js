var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

console.log('HI ITS KEAN');

//to test the project just use
//node index.js

//then go to http://localhost:3000/