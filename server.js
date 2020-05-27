var express  = require('express');
var data = require('./data/test.json');

var app = express();
const PORT = 3000;

app.use(express.static(__dirname + '/public')); // set location for static files
app.use(require("body-parser").urlencoded({extended: true})); // parse form submissions

app.set('view engine', 'ejs'); // set the view engine to ejs

// use res.render to load up an ejs view file

// pass in page title 
app.get('/', function(req, res) {
    var title = 'Our Home Page';
    res.render('pages/index', {
        title: title
    });
});

res.render('pages/index', {
        drinks: drinks,
        tagline: tagline
    });


app.listen(PORT,()=>{
  console.log(`App is running on port ${PORT}`);
  console.log(data);
});
