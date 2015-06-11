var express = require('express')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var app = express();
var path = require('path');

var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/tester');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// think I do need this but what exactly doing
app.use(function(req,res,next){
    req.db = db;
    next();
});

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/mongo', function(req, res) {
  var db = req.db;
  var collection = db.get('customers')
  collection.find({},{},function(e,docs){
        console.log(docs);
        res.render('mongo', {
            user: docs
        });
    });
})

app.get('/newuser', function(req, res) {
  res.render('newuser', {title: "Add New User"});
});

app.post('/adduser', function(req, res) {
  var db = req.db;
  console.log(req.body);
  console.log(req.params);
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  console.log(firstName);
  console.log(lastName);

  var collection = db.get('customers')

  collection.insert(
    {"firstName" : firstName, "lastName" : lastName},
    function(err, doc) {
      if(err) {
        res.send("There was a problem adding the information to the database.");
      } else {
        res.redirect("mongo");
      }
    });
});

app.get('/apitoken', function(req, res){
  res.json({token: '736ec2b220d58eefcaaa306b189c798e4981ceb5'});
})

app.listen(app.get('port'), function() {
  console.log('Listening on:', app.get('port'));
});

module.exports = app;