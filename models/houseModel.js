const mongoose = require('mongoose');
const traitSchema = require('./traitModel');

const houseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A house must have a name'],
    unique: true,
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
      type: {
        firstName: {
          type: String,
          required: true,
        },
        lastName: {
          type: String,
          required: true,
        },
      },
    },
  ],
  traits: [{ type: traitSchema.traitSchema }],
});

const House = mongoose.model('House', houseSchema);

module.exports = House;
