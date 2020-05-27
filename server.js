var express  = require('express');
var data = require('./data/test.json');

var app = express();
const PORT = 3000;

//we can now serve up static pages - COMMENTED OUT FOR NOW
//app.use(express.static(__dirname));

//show JSON data at default URL
app.get('/',(req,res) =>{
  //res.send(`We're at the root of the app, on port ${PORT}`);
  res.json(data);
});


app.listen(PORT,()=>{
  console.log(`App is running on port ${PORT}`);
  console.log(data);
});
