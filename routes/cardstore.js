
var mongoose = require('mongoose');
var Card = mongoose.model('Card');
var Ability = mongoose.model('Ability');

exports.getcards = function(req, res, next) {
  Card.find(function(err, cards){
    if(err){ return next(err); }

    res.json(cards);
  }).populate('ability');
};

exports.addcard = function(req, res, next) {
  var card = new Card(req.body).toObject();

  delete card._id;

  var query = { '_id': req.body._id || new mongoose.mongo.ObjectID() };

  Card.update(query, card, { upsert:true }, function(err, doc){
    if (err) return next(err);

    return res.json(doc);
  });
};

exports.removecard = function(req, res, next) {
  Card.findOne({ _id: req.body.id }).remove().exec(function(err, card) {
    if (err) return next(err);

    res.json(card);
  });
}

exports.card = function(req, res, next, id) {
  var query = Card.findById(id);

  query.exec(function (err, card){
    if (err) { return next(err); }
    if (!card) { return next(new Error('can\'t find card')); }

    req.card = card;
    return next();
  });
};

exports.getcard = function(req, res) {
  res.json(req.card);
}
