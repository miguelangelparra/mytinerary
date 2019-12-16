const express = require('express');
const router = express.Router();

//Cities Model: Schema de las ciudades
const Cities = require('../../models/CitiesSchema');

//Ruta: Busca todas las ciudades en la BD de Mongo
router.get('/', function (req, res) {
  Cities.find()
    .then(cities => res.json(cities))
})

module.exports = router