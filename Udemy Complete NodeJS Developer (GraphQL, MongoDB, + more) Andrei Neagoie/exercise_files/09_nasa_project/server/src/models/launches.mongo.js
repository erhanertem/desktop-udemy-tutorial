const mongoose = require('mongoose');

// > #1. CREATE THE SCHEMA
const launchesSchema = new mongoose.Schema({
  flightNumber: {
    type: Number,
    required: true,
    // default: 100,
    // min: 100,
    // max: 999
  },
  launchDate: {
    type: Date,
    required: true,
  },
  mission: {
    type: String,
    required: true,
  },
  rocket: {
    type: String,
    required: true,
  },
  target: {
    type: String,
    required: true,
  },
  customers: [String],
  upcoming: {
    type: Boolean,
    required: true,
  },
  success: {
    type: Boolean,
    required: true,
    default: true,
  },
});

// > #2. CREATE THE MODEL FROM SCHEMA
// NOTE: Connects launchesSchema with the "launches" collection - behind the scene "Launch" is made lowercase and turn into plural.
module.exports = mongoose.model('Launch', launchesSchema);
// VERY IMPORTANT!! (NAME OF THE COLLECTION - IN SINGULAR NAMING , NAME OF THE SCHEMA)
