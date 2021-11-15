const mongoose = require('mongoose')

const fishiesSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: [false, 'date is not require']
  },
  time: {
    type: String,
    required: [false, 'time is not required']
  },
  latitude: {
    type: String,
    required: [false, 'latitude is not required']
  },
  longitude: {
    type: String,
    required: [false, 'longitude is not required']
  },
  scientific_name: {
    type: String,
    required: [true, 'scientific_name is required']
  },
  common_name: {
    type: String,
    required: [true, 'common_name is required']
  }
})

module.exports = fishiesSchema
