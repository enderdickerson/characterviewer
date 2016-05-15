
var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.users = function(req, res, next) {
  User.find(function(err, users){
    if(err){ return next(err); }

    res.json(users);
  });
};

exports.user = function(req, res, next, id) {
  var query = User.findById(id);

  query.exec(function (err, user){
    if (err) { return next(err); }
    if (!user) { return next(new Error('can\'t find user')); }

    req.user = user;
    return next();
  });
};

exports.getuser = function(req, res) {
  res.json(req.user);
}
