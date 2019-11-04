let mongoose = require('mongoose')

let Cities = new mongoose.Schema({
  name: {
    type: String, 
    unique:true},
  country: {
    type: String
  }
})

module.exports = Cities = mongoose.model('Cities', Cities)
