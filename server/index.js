const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());


    app.post('/wafers', function(req, res) {
      res.send('test')
      console.log(req.body);
      console.log('POST REQ RECEIVED');
    })


app.listen(3000, function() {
    console.log('SERVER RUNNING');
})
