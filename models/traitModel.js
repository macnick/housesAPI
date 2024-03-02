const mongoose = require('mongoose');

const traitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Trait = mongoose.model('Trait', traitSchema);

module.exports = Trait;
