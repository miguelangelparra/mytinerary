const mongoose = require('mongoose')

let CitiesSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true
  },
  country: {
    type: String
  },
  imagen: {
    type: String
  }
},
)

module.exports = CitiesSchema = mongoose.model('Cities', CitiesSchema, 'cities')
