const mongoose = require('mongoose')
//Schema de Cities
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
//Exporta como "CitiesSchema" el modelo Mongoose, pasa por parametro "1)nombre de Schema",2)Schema,3)nombre de coleccion"
module.exports = CitiesSchema = mongoose.model('Cities', CitiesSchema, 'cities')
