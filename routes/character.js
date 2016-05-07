var models = require('../models');


exports.all = function(req, res, next) {
  models.Character.findAll().then(function(characters) {
    res.json(characters);
  }, function(err) {
    res.json({'Error occurred': err});
  });
};