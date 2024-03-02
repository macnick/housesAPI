const mongoose = require('mongoose');

const houseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  houseColours: {
    type: String,
  },
  founder: {
    type: String,
  },
  animal: {
    type: String,
  },
  element: {
    type: String,
  },
  ghost: {
    type: String,
  },
  commonRoom: {
    type: String,
  },
  heads: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Head',
    },
  ],
  traits: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Trait',
    },
  ],
});

const House = mongoose.model('House', houseSchema);

module.exports = House;

// is parent referencing better?
