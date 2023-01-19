require('dotenv').config();

var express = require('express');
var app = express();

app.get("/api/whoami", function (req, res) {
  const ip = req.ip;
  const language = req.headers['accept-language'];
  const software = req.headers['user-agent'];
  res.send({ip: ip, language: language, software: software});
})

var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

var listener = app.listen(3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});