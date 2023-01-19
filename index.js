require('dotenv').config();
var express = require('express');
const whoamiRouter = require("./whoamiRouter");
var app = express();
app.use('/', whoamiRouter);

var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

app.use(express.static('public'));
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, '0.0.0.0',function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
