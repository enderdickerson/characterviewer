
var mongoose = require('mongoose');
var Card = mongoose.model('Card');
var Ability = mongoose.model('Ability');

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.getcards = function(req, res, next) {
  Card.find(function(err, cards){
    if(err){ return next(err); }

    res.json(cards);
  }).populate('ability');
};

exports.getabilities = function(req, res, next) {
  Ability.find(function(err, abilities){
    if(err){ return next(err); }

    res.json(abilities);
  });
};

exports.addability = function(req, res, next) {
  var ability = new Ability(req.body).toObject();

  delete ability._id;

  console.log(ability);

  var query = { '_id': req.body._id || new mongoose.mongo.ObjectID() };

  Ability.update(query, ability, { upsert:true }, function(err, doc){
    if (err) return next(err);

    return res.json(doc);
  });
};

exports.removeability = function(req, res) {
  var ObjectId = mongoose.Types.ObjectId;

  var id = new ObjectId(req.body._id);

  var conditions = { "ability": req.body._id };
  var update = { $set: { "ability": undefined } };
  var options = { multi: true };

  Card.update(conditions, update, options, function (err, numAffected) {
    if (err) {
      return res.json(err);
    }
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

exports.ability = function(req, res, next, id) {
  var query = Ability.findById(id);

  query.exec(function (err, ability){
    if (err) { return next(err); }
    if (!ability) { return next(new Error('can\'t find ability')); }

    req.ability = ability;
    return next();
  });
};

exports.getability = function(req, res) {
  res.json(req.ability);
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
