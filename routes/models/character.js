var models = require('../../models');
var express = require('express');
var routes = express.Router();

// app.get('/data/characters', characterStore.all);
// app.get('/data/characters/:character', characterStore.getcharacter);
// app.param('character', characterStore.character);

routes.param('character', character);
routes.get('/characters', all);
routes.get('/characters/:character', getcharacter);


function all(req, res, next) {
  models.Character.findAll({where: {deleteDate: null}}).then(function(characters) {
    res.json(characters);
  }, function(err) {
    res.json({'Error occurred': err});
  });
}

function character(req, res, next, character) {
  models.Character.findOne({where: {name: character, deleteDate: null}}).then(function(character) {
    res.json(character);
  }, function(err) {
    res.json({'Error occurred': err});
  });
}

function getcharacter(req, res) {
  res.json(req.character);
}

module.exports = routes;
