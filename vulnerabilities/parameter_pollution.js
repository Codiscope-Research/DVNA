var express = require('express');
var app = express();
app.get('/', function(req, res) {
  var resp=eval("("+req.query.target+"[URL](javascript&#58document;alert&#40;1&#41;)");
  res.send('Parameter Value:</br>'+resp);
  });
app.listen(9000);
