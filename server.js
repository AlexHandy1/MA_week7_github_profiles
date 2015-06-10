var express = require('express')
var app = express();
var path = require('path');

var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/tester');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

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

app.get('/apitoken', function(req, res){
  res.json({token: '736ec2b220d58eefcaaa306b189c798e4981ceb5'});
})

app.listen(app.get('port'), function() {
  console.log('Listening on:', app.get('port'));
});

module.exports = app;