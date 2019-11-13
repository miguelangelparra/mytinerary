let mongoose = require('mongoose')

let Itinerary = new mongoose.Schema({
  city:{
      type:String,
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
  }

},
)

module.exports = Itinerary = mongoose.model('Itinerary', Itinerary,'itinerary')
