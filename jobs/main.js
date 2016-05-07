var schedule = require('node-schedule');
var mysql = require('mysql');
var config = require('../config.js');



module.exports = function() {
  console.log('schedule set');
  var j = schedule.scheduleJob('*/20 * * * * *', function() {
    console.log('Accessing remote');
    updateCharactersFromRemote();
  });
};

function updateCharactersFromRemote() {
  var connection = mysql.createConnection(config.remote());

  connection.connect();

  connection.query('SELECT `name`, `online` FROM characters', function(err, rows) {
    if (err) {
      console.log(err);
      return;
    }

    console.log('Remote results: ', JSON.stringify(rows));
  });

  connection.end();
}