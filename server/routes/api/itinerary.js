const express = require('express');
const router = express.Router();
//importa Mongoose
const mongoose = require('mongoose')
//Schema de Itinerarios
const Itinerary = require('../../models/ItinerarySchema');
//const Activities = require('../../models/ActivitySchema')

//Ruta : Busca la ciudad especifica, pupula la ciudad y sus activities
router.get('/:city', function (req, res) {
  const cityId = mongoose.Types.ObjectId(req.params.city)
  Itinerary.find({ city: cityId }).populate('city').populate('activities')
    .then(itinerary => {
      res.json(itinerary)
    })
})

module.exports = router;