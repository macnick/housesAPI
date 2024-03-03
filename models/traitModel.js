const mongoose = require('mongoose');

const traitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = {
  traitSchema,
};
