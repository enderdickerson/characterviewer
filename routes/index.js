
var mongoose = require('mongoose');
var Card = mongoose.model('Card');
var Ability = mongoose.model('Ability');

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.getcards = function(req, res) {
  Card.find(function(err, cards){
    if(err){ return next(err); }

    res.json(cards);
  }).populate('ability');
};

exports.getabilities = function(req, res) {
  Ability.find(function(err, abilities){
    if(err){ return next(err); }

    res.json(abilities);
  });
};

exports.addability = function(req, res) {
  var ability = new Ability(req.body);

  ability.save(function(err, ability){
    if(err){ return next(err); }

    res.json(ability);
  });
};

exports.removeability = function(req, res) {
  var id = mongoose.Types.ObjectId(req.body._id);

  var conditions = { "ability._id": id };
  var update = { $set: { "ability": undefined } };
  var options = { multi: true };

  Card.update(conditions, update, options, function (err, numAffected) {
    res.json(numAffected);
  });

  Ability.findOne({ _id: id }).remove().exec(function (err, ability){
    if(err){ return next(err); }

    res.json(ability);
  });
}

exports.addcard = function(req, res, next) {
  var card = new Card(req.body);

  console.log(req);

  card.save(function(err, card){
    if(err){ return next(err); }

    res.json(card);
  });
};

exports.card = function(req, res, next, id) {
  var query = Card.findOne({ 'name': id });

  query.exec(function (err, card){
    if (err) { return next(err); }
    if (!card) { return next(new Error('can\'t find card')); }

    req.card = card;
    return next();
  });
};

exports.getcard = function(req, res) {
  res.json(req.post);
}
