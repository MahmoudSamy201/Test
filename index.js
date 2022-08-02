var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World! for Mah7moud')
})

app.listen(3001, function () {
  console.log('Listening on port 3000...')
})
