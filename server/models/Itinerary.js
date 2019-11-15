const mongoose = require('mongoose')
const Schema = mongoose.Schema



let Itinerary = new mongoose.Schema({
  city: { type: Schema.Types.ObjectId  },
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
  }

},
)
module.exports = Itinerary = mongoose.model('Itinerary', Itinerary, 'itinerary')
