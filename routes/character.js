var models = require('../models');

exports.all = function(req, res, next) {
  models.Character.findAll().then(function(characters) {
    res.json(characters);
  }, function(err) {
    res.json({'Error occurred': err});
  });
};

exports.character = function(req, res, next, character) {
  console.log('character: ', character);
  models.Character.findOne({where: {name: character}}).then(function(character) {
    res.json(character);
  }, function(err) {
    res.json({'Error occurred': err});
  });
};

exports.getcharacter = function(req, res) {
  res.json(req.character);
};