const express = require('express');
const houseRouter = require('./routes/house');

const app = express();

app.use('/api/v1/houses', houseRouter);

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello from houses API!',
    app: 'Houses API',
  });
});

module.exports = app;
