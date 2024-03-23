const { getAllPlanets } = require('../../models/planets.model');

//RESPOND TO GET FETCH REQ @ client requests.js/httpGetPlanets/@route "/planets"
function httpGetAllPlanets(_req, res) {
    return res.status(200).json(getAllPlanets()); //IMPORTANT!! RETURN THINGS TO BE EXPLICIT OF WHAT THIS FUNCTION DOES
}

module.exports = { httpGetAllPlanets };
