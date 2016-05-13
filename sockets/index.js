module.exports = function (io) {
  io.on('connection', function (socket) {
    var jobs = require('../jobs/main');
    jobs.io(socket);
  });
};
