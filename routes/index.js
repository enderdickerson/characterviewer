
var mongoose = require('mongoose');
var Card = mongoose.model('Card');

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.getcards = function(req, res) {
  Card.find(function(err, cards){
    if(err){ return next(err); }

    res.json(cards);
  });
};

exports.addcard = function(req, res) {
  var card = new Card(req.body);

  card.save(function(err, card){
    if(err){ return next(err); }

    res.json(card);
  });
};

exports.card = function(req, res, next, id) {
  var query = Card.findOne({ 'name': id });

  query.exec(function (err, post){
    if (err) { return next(err); }
    if (!post) { return next(new Error('can\'t find post')); }

    req.post = post;
    return next();
  });
};

exports.getcard = function(req, res) {
  res.json(req.post);
}