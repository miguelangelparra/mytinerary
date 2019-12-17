const passport = require("passport")
const User = require('./models/UserSchema');
var GoogleStrategy = require('passport-google-oauth20').Strategy;


module.exports = passport.use(new GoogleStrategy({
    clientID: "88095081565-9vd1v2hrq7295tpnnlibrr4q5us275eq.apps.googleusercontent.com",
    clientSecret: "teng8krrngyOUyVygs4H_Ec8",
    callbackURL: "http://localhost:5000/api/users/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findById({ _id: profile.id }, function (err, user) {
      console.log(user)
      return cb(err, user);
    });
  }
));

// function(accessToken, refreshToken, profile, cb) {
//   User.findOrCreate({ __Id: profile.id }, function (err, user) {
//     console.log(user)
//    console.log(profile)
//     return cb( JSON.stringify(profile));