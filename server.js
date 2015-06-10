var express = require('express')

var app = express();

var path = require('path');

app.use(express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/apitoken', function(req, res){
  res.json({token: '736ec2b220d58eefcaaa306b189c798e4981ceb5'});
})

app.listen(app.get('port'), function() {
  console.log('Listening on:', app.get('port'));
});

module.exports = app;