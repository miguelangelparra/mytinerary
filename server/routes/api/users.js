const express = require('express');
const router = express.Router();
const User = require('../../models/UserSchema');
var bcrypt = require('bcryptjs'); //Encriptador

router.get('/', function(req, res) {
  User.find().then(users => res.json(users));
});

router.post('/', (req, res) => {
  //Encriptacion
  var salt = bcrypt.genSaltSync(10); //Rondas de encriptacion
  var hash = bcrypt.hashSync(req.body.password, salt); //obtencion del hash segun rondas de encriptacion

  //Creacion de un usuario usando el Schema de Mongosee
  const newUser = new User({
    pic: req.body.pic,
    userName: req.body.userName,
    email: req.body.email,
    password: hash,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    country: req.body.country
  });
  //Salva en la base de datos de mongodb  el usuario creado utilizando mongosee
  newUser
    .save()
    .then(user => {
      res.send(user);
    })
    .catch(err => {
      res.status(500).send('Server error');
    });
});
module.exports = router;
