var mongoose = require('mongoose');

var CardSchema = new mongoose.Schema({
  name: String,
  strength: Number,
  ability: { type: mongoose.Schema.Types.ObjectId, ref: 'Ability' },
  special: { type: Boolean, default: false },
  hero: { type: Boolean, default: false },
  leader: { type: Boolean, default: false }
});

mongoose.model('Card', CardSchema);
