const mongoose = require('mongoose');

const headSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const Head = mongoose.model('Head', headSchema);

module.exports = Head;
