var express  = require('express');
var data = require('./data/test.json');

var app = express();
const PORT = 3000;

app.use(express.static(__dirname + '/public')); // set location for static files
app.use(require("body-parser").urlencoded({extended: true})); // parse form submissions

app.set('view engine', 'ejs'); // set the view engine to ejs

// pass in page title as JSON
app.get('/', function(req, res) {
    var title = 'Our Home Page';
    res.render('pages/index', {
        title: title
    });
});

//add users route
app.get('/users', function(req, res) {
    var title = 'Users Page';
    res.render('users/index', {
        title: title,
        users: data
    });
});

app.listen(PORT,()=>{
  console.log(`App is running on port ${PORT}`);
  console.log(data);
});
