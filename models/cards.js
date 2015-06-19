var mongoose = require('mongoose');

var CardSchema = new mongoose.Schema({
  name: String,
  strength: String,
  ability: String
});

mongoose.model('Card', CardSchema);