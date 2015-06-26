
/**
 * Module dependencies.
 */
require('newrelic');
var express = require('express');
var mongoose = require('mongoose');
var passport = require('passport');
var uriUtil = require('mongodb-uri');
var config = require('./config')

var options = {
	server: {
		socketOptions: {
			keepAlive: 1,
			connectTimeoutMS: 30000
		}
	},
	replset: {
		socketOptions: {
			keepAlive: 1,
			connectTimeoutMS: 30000
		}
	}
};

var mongodbUri = config.db();
var mongooseUri = uriUtil.formatMongoose(mongodbUri);

mongoose.connect(mongooseUri, options);
var conn = mongoose.connection;

conn.on('error', console.error.bind(console, 'connection error:'));

conn.once('open', function() {
	startApp();
});

function startApp() {
	require('./models/card');
	require('./models/ability');
	require('./models/user');
	require('./config/passport');

	var routes = require('./routes');
	var cardStore = require('./routes/cardstore');
	var abilityStore = require('./routes/abilitystore');
	var user = require('./routes/user');
	var http = require('http');
	var path = require('path');

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

	// app.use('/public/javascripts', express.static('/public/javascripts'));

	// development only
	if ('development' == app.get('env')) {
	  app.use(express.errorHandler());
	}

	var jwt = require('express-jwt');
	var auth = jwt({ secret: process.env.JWT_SECRET, userProperty: 'payload' });

	// app.get('/*', routes.index);
	app.param('card', cardStore.card);
	app.param('ability', abilityStore.ability);

	app.get('/', routes.index);

	app.get('/data/cards', cardStore.getcards);
	app.post('/data/card', auth, cardStore.addcard);
	app.post('/data/card/remove', auth, cardStore.removecard);
	app.get('/data/cards/:card', auth, cardStore.getcard);

	app.get('/data/abilities', abilityStore.getabilities);
	app.post('/data/ability', auth, abilityStore.addability);
	app.post('/data/ability/remove', auth, abilityStore.removeability);
	app.get('/data/abilities/:ability', auth, abilityStore.getability);

	app.post('/data/register', user.register);
	app.post('/data/login', user.login);

	app.get('/*', routes.index);

	http.createServer(app).listen(app.get('port'), function(){
	  console.log('Express server listening on port ' + app.get('port'));
	});
};
