const express = require('express');
const router = express.Router();
const mongoose= require('mongoose')

const Itinerary = require('../../models/Itinerary');

router.get('/:city', function(req,res){
  const cityId = mongoose.Types.ObjectId(req.params.city)

    Itinerary.find({city: cityId}).populate('city')
    .then(itinerary =>  res.json(itinerary))})
    //res("router.param.id")
  //  Itinerary.find(router.param.id)
   // .then(itinerary => res.json(itinerary))
//})

module.exports = router;