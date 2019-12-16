const express = require('express'); //Express
const router = express.Router(); //Enrutador
const User = require('../../models/UserSchema'); //Schema de usuario
const { check, validationResult } = require('express-validator'); //validator
var bcrypt = require('bcryptjs'); //Encriptador
const passport = require('passport') //Passport


const key = require("../../database/config/keys"); //clave jwt
const jwt = require("jsonwebtoken"); //jwt libreria


//Busca al usurio en Mongo y confirma contraseña correcta
router.post('/login', function (req, res) {
  //Busca en la base de datos el usuario dado
  User.find({ email: req.body.email }).then(users => {

    //Valida si el usuario existe
    if (users.length == 0) {
      return res.status(404).send({ error: "Usuario no encontrado" })
    }
    //Validacion de contraseña. 
    //Utiliza la libreria Bcrypt para desencriptar contraseña encontrada en base de datos y compararla con contraseña dada
    if (bcrypt.compareSync(req.body.password, users[0].password)) {
      //Realiza un payload con la informacion que sera encryptada en token
      const payload = {
        id: users[0]._id,
      };
      // Setea el tiempo de vigencia del token
      const options = { expiresIn: 2592000 };
      //Se crea token con payload, tiempo de vigencia y clave secreta
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
            //Se devuelve token
            res.json({
              success: true,
              token: token
            });
          }
        }
      );
    }
    else {
      //Si el usuario es correcto pero no valido contraseña se responde error 
      return res.status(401).send({ error: "Contraseña incorrecta" })
    }
  });
});


//Valida datos y crea usuarios en mongo
router.post('/create', [
  // Valida que el email dado tenga formato email (libreria validator)
  check('email').isEmail(),
  //Valida que la contraseña dada tenga un minimo de caracteres (libreria validator)
  check('password').isLength({ min: 6 })
], (req, res) => {
  // Encuentra los errores de validacion y los devuelve en un array
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  //Encriptacion
  var salt = bcrypt.genSaltSync(10); //Rondas de encriptacion
  var hash = bcrypt.hashSync(req.body.password, salt); //obtencion del hash segun rondas de encriptacion y contraseña dada

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

router.post(
  "/auth",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    User
      .findOne({ _id: req.user.id })
      .then(user => {
        console.log(user)
        res.json(user);
      })
      .catch(err => res.status(404).json({ error: "User does not exist!" }));
  }
);

module.exports = router;
