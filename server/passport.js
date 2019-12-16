const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport")

const User = require('./models/UserSchema');
const key = require('./database/config/keys');

//Constante de opciones para estrategia de JWT
const opts = {};
//Define estrategia BearerToken en opciones de estrategia
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
//Agrega clave secreta a opciones de estrategia
opts.secretOrKey = key.secretOrKey;


module.exports = passport.use(
  //Crea nueva estrategia JWT, pasa por parametros opciones de estrategia y el Payload
  new JwtStrategy(opts, (jwt_payload, done) => {
    //Busca en la BD MOngo si se encuentra el usuario con el Id pasado por el payload   
    User.findById(jwt_payload.id)
      .then(user => {
        if (user) {
          console.log("encontro al usuario")
          return done(null, user);
        }
        return done(null, false);
      })
      .catch(err => res.status(404).json({ error: "User does not exist!" }));
  })

);