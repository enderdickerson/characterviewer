var mongoose = require('mongoose');

var CardSchema = new mongoose.Schema({
  name: String,
  strength: Number,
  ability: {type: mongoose.Schema.Types.ObjectId, ref: 'Ability'}
});

mongoose.model('Card', CardSchema);
