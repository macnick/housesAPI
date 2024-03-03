const House = require('../models/houseModel');

const getAllHouses = async (req, res) => {
  const queryObj = {};
  const houseName = req.query.name;
  if (houseName) {
    queryObj.name = { $regex: houseName };
  }

  try {
    const houses = await House.find(queryObj);
    res.status(200).json({
      status: 'success',
      results: houses.length,
      data: {
        houses,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

module.exports = {
  getAllHouses,
};
