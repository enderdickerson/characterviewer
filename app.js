require('newrelic');
var express = require('express');
var config = require('./config/config');
var models = require('./models');
var routes = require('./routes');
var path = require('path');
var http = require('http');
var jobs = require('./jobs/main');
var morgan = require('morgan');
var fs = require('fs');
var errorhandler = require('errorhandler');
var serveStatic = require('serve-static');
var io = require('socket.io');

models.sequelize.sync().then(function () {
  startApp();
});

function startApp() {
  jobs.run();
  var app = express();

  app.set('port', process.env.PORT || 3000);
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');
  app.use(serveStatic(path.join(__dirname, '/public')));

  if ('development' == app.get('env')) {
    app.use(errorHandler());
  }

  app.use('/', routes);

  var logStream = fs.createWriteStream(__dirname + '/errors.log', {flags: 'a'});

  app.use(morgan('combined', {stream: logStream}));

  var server = http.createServer(app);

  server.listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
  });

  io = io.listen(server);

  require('./sockets/index')(io);
}
