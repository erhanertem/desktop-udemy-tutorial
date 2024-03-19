const planets = require('../../models/planets.model');

function getAllPlanets(req, res) {
  return res.status(200).json(planets); //RETURN THINGS TO BE EXPLICIT OF WHAT THIS FUNCTION DOES
}

module.exports = { getAllPlanets };
