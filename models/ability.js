var mongoose = require('mongoose');

var AbilitySchema = new mongoose.Schema({
  name: String,
  description: String,
  icon: String
});

mongoose.model('Ability', AbilitySchema);
