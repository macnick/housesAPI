const express = require('express');
const { getAllHouses } = require('../controllers/houseController');

const router = express.Router();

router.route('/').get(getAllHouses);

module.exports = router;
