var schedule = require('node-schedule');
var mysql = require('mysql');
var config = require('../config/config.js');
var models = require('../models');
var io = require('../sockets/index');

exports.run = function() {
  // if (process.env.NODE_ENV !== 'local') {
    var j = schedule.scheduleJob('*/20 * * * * *', function() {
      console.log('Running character update job');
      updateCharactersFromRemote();
    });
  // }
};

exports.io = function(socket) {
  io = socket;
};

function updateCharactersFromRemote() {
  var remote = mysql.createConnection(config.remote());

  remote.connect();

  remote.query('SELECT * FROM characters', function(err, rows) {
    if (err) {
      console.log(err);
      return;
    }

    createOrUpdateCharacters(rows)
  });

  remote.end();
}

function createOrUpdateCharacter(characterFromRemote) {
  return models.Character.findById(characterFromRemote.guid).then(function(character) {
    if (!character) {
      return models.Character.create(characterFromRemote);
    }
    else {
      character.updateAttributes(characterFromRemote);
    }
  });
}

function createOrUpdateCharacters(charactersFromRemote) {
  var promises = [];

  charactersFromRemote.forEach(function(characterFromRemote) {
    promises.push(createOrUpdateCharacter(characterFromRemote));
  });

  return models.Sequelize.Promise.all(promises).then(function() {
    var listOfCurrent = charactersFromRemote.map(function(item) {
      return item.guid;
    });

    models.Character.destroy({where: {guid: {$notIn: listOfCurrent}}}).then(function() {
      models.Character.findAll().then(function(characters) {
        io.emit('characters:update', characters);
      });
    });
  });
}