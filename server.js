var express  = require('express');
var data = require('./data/test.json');

var app = express();
const PORT = 3000;

app.use(express.static(__dirname + '/public')); // set location for static files
app.use(require("body-parser").urlencoded({extended: true})); // parse form submissions

//load index.html using router
app.get('/',(req,res) =>{
  res.type('text/html');
  res.sendFile(__dirname + '/index.html');
});

app.listen(PORT,()=>{
  console.log(`App is running on port ${PORT}`);
  console.log(data);
});
