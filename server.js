var express  = require('express');
var data = require('./data/test.json');

var app = express();
const PORT = 3000;

//we can now serve up static pages
app.use(express.static(__dirname));

app.get('/',(req,res) =>{
  res.send(`We're at the root of the app, on port ${PORT}`);
});

app.listen(PORT,()=>{
  console.log(`App is running on port ${PORT}`);
  console.log(data);
});
