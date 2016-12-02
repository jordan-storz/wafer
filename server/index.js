const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.post('/wafers', function(req, res) {
  console.log('POST REQ RECEIVED');
})


app.listen(3000, function() {
  console.log('SERVER RUNNING');
})
