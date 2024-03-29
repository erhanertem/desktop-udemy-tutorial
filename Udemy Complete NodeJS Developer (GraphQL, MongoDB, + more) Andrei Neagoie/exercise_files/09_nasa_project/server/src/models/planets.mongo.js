const mongoose = require('mongoose');

// > #1. CREATE THE SCHEMA
const planetsSchema = new mongoose.Schema({
  keplerName: {
    type: String,
    required: true,
  },
});

// > #2. CREATE THE MODEL FROM SCHEMA
// NOTE: Connects planetsSchema with the "planets" collection - behind the scene "Planet" is made lowercase and turn into plural.
module.exports = mongoose.model('Planet', planetsSchema);
// VERY IMPORTANT!! (NAME OF THE COLLECTION - IN SINGULAR NAMING , NAME OF THE SCHEMA)
