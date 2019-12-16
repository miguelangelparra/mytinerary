const mongoose = require('mongoose')
const Schema = mongoose.Schema
//Schema de Itinerarios
let ItinerarySchema = new mongoose.Schema({
  city: {
    type: Schema.Types.ObjectId,
    ref: "Cities"
  },
  title: {
    type: String,
  },
  profilePic: {
    type: String,
  },
  rating: {
    type: Number,
  },
  duration: {
    type: Number,
  },
  price: {
    type: Number,
  },
  hashtag: {
    type: Array,
  },
  activities: [{ type: Schema.Types.ObjectId, ref: 'Activities' }]
},
)
//Exporta como "ItinerarySchema" el modelo Mongoose, pasa por parametro "1)nombre de Schema",2)Schema,3)nombre de coleccion"
module.exports = ItinerarySchema = mongoose.model('Itineraries', ItinerarySchema, 'itineraries')
