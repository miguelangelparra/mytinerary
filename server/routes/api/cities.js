const express = require('express');
const router = express.Router();

//Cities Model
const Cities = require('../../models/CitiesSchema');

// @route GET api/cities
// @desc  Get all items
// @access public
router.get('/', function (req, res) {
  Cities.find()
    .then(cities => res.json(cities))
})

module.exports = router