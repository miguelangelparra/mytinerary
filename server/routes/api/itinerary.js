const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Itinerary = require('../../models/ItinerarySchema');
const Activities = require('../../models/ActivitySchema')

router.get('/:city', function (req, res) {
  const cityId = mongoose.Types.ObjectId(req.params.city)
  Itinerary.find({ city: cityId }).populate('city').populate('activities')
    .then(itinerary => {
      console.log(itinerary.activities);
      res.json(itinerary)
      
    })
})

module.exports = router;