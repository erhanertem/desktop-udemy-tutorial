const { getAllPlanets } = require('../../models/planets.model');

function httpGetAllPlanets(req, res) {
  return res.status(200).json(getAllPlanets()); //IMPORTANT!! RETURN THINGS TO BE EXPLICIT OF WHAT THIS FUNCTION DOES
}

module.exports = { httpGetAllPlanets };
