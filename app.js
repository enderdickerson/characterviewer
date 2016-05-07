require('newrelic');
var express = require('express');
var passport = require('passport');
var config = require('./config');
var mysql = require('mysql');

console.log(config.db());

var connection = mysql.createConnection(config.db());

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('starting: ', config.db());
  startApp();
});

function startApp() {
	var routes = require('./routes');
	var http = require('http');
	var path = require('path');
	var roles = require('./constants/roles');

	var app = express();

	// all environments
	app.set('port', process.env.PORT || 3000);
	app.set('views', path.join(__dirname, 'views'));
	app.set('view engine', 'ejs');
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.json());
	app.use(express.urlencoded());
	app.use(express.methodOverride());

	app.use(express.static(path.join(__dirname, 'public')));

	app.use(passport.initialize());

	app.use(app.router);


	// development only
	if ('development' == app.get('env')) {
	  app.use(express.errorHandler());
	}

	var jwt = require('express-jwt');
	var auth = jwt({ secret: process.env.JWT_SECRET, userProperty: 'payload' });

	app.get('/', routes.index);

	// app.post('/data/card/remove', auth, authenticate.roles(roles.admin), cardStore.removecard);

	// app.post('/data/register', user.register);
	// app.post('/data/login', user.login);

	app.get('/*', routes.index);

	http.createServer(app).listen(app.get('port'), function(){
	  console.log('Express server listening on port ' + app.get('port'));
	});
}
