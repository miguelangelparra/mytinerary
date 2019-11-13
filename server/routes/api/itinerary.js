const express = require('express');
const router = express.Router();

const Itinerary = require('../../models/Itinerary');

router.get('/:city', function(req,res){
    Itinerary.find({city: req.params.city})
    .then(itinerary => res.json(itinerary))})
    //res("router.param.id")
  //  Itinerary.find(router.param.id)
   // .then(itinerary => res.json(itinerary))
//})

module.exports = router;