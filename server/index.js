const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());


    app.post('/wafers', function(req, res) {
      let responseBody = req.body;
      responseBody.message = 'Enjoy!';
      console.log(responseBody);
      res.json(responseBody);
    })


app.listen(3000, function() {
    console.log('SERVER RUNNING');
})
