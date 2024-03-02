const express = require('express');

const app = express();

app.get('/api/v1/houses', (req, res) => {
  res.status(200).json({
    message: 'Hello from houses API!',
    app: 'Houses API',
  });
});

module.exports = app;
