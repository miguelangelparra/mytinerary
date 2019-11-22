const mongoose = require('mongoose')
const Schema = mongoose.Schema

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
module.exports = ItinerarySchema = mongoose.model('Itinerary', ItinerarySchema, 'itinerary')
