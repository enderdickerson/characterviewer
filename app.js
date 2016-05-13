require('newrelic');
var express = require('express');
var config = require('./config');
var models = require('./models');

models.sequelize.sync().then(function() {
  startApp();
});

function startApp() {
  require('./jobs/main')();

	var routes = require('./routes');
	var http = require('http');
	var path = require('path');
  var characterStore = require('./routes/character');

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

	app.use(express.static(path.join(__dirname, '/public')));

	app.use(app.router);

	// development only
	if ('development' == app.get('env')) {
	  app.use(express.errorHandler());
	}

	app.param('character', characterStore.character);

	app.get('/', routes.index);

  app.get('/data/characters', characterStore.all);
  app.get('/data/characters/:character', characterStore.getcharacter);

  app.get('/*', routes.index);

	http.createServer(app).listen(app.get('port'), function(){
	  console.log('Express server listening on port ' + app.get('port'));
	});
}
