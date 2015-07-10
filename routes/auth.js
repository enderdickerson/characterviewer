exports.roles = function(roles) {
  return function(req, res, next) {
    if (!req.payload.roles) {
      return res.status(401).json({ message: 'No roles' });
    }

    if (roles.constructor !== Array) {
      roles = [roles];
    }

    var i = 0,
      len = roles.length;
    while(i < len) {
      if (req.payload.roles.indexOf(roles[i]) === -1) {
        res.status(403).json({ message: 'Invalid roles' })
        next('route');
        i = len;
      }

      i++;
    }

    return next();
  }
}
