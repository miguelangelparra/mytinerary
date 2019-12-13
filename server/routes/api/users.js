const express = require('express');
const router = express.Router();
const User = require('../../models/UserSchema');
var bcrypt = require('bcryptjs'); //Encriptador
const { check, validationResult } = require('express-validator'); //validator

const key = require("../../database/config/keys"); //clave jwt
const jwt = require("jsonwebtoken"); //jwt


//Busca al usurio en mongo y confirma contraseña correcta
router.post('/login', function (req, res) {
  User.find({ email: req.body.email }).then(users => {

    if (users.length == 0) {
      return res.status(404).send({ error: "Usuario no encontrado" })
    }

    if (bcrypt.compareSync(req.body.password, users[0].password)) {
     
      const payload = {
        id: users[0]._id,
        username: users[0].userName,
        avatarPicture: users[0].pic
      };
      const options = { expiresIn: 2592000 };
      jwt.sign(
        payload,
        key.secretOrKey,
        options,
        (err, token) => {
          if (err) {
            res.json({
              success: false,
              token: "There was an error"
            });
          } else {
            res.json({
              success: true,
              token: token
            });
          }
        }
      );


      // return res.json(users[0].password)
    } // true
    else {
      return res.status(401).send({ error: "Contraseña incorrecta" })
    }
  });
});


//Valida datos y crea usuarios en mongo
router.post('/create', [
  // username must be an email
  check('email').isEmail(),
  // password must be at least 5 chars long
  check('password').isLength({ min: 6 })
], (req, res) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
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
