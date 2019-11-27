const express = require('express');
const router = express.Router();
const User = require('../../models/UserSchema');


router.get('/', function (req, res) {
  User.find()
    .then(users => res.json(users))
})

router.post('/', (req, res) => {
  const newUser = new User({
      email: req.body.email,
      password: req.body.password,
      pic:req.body.pic
  })
  newUser.save()
    .then(user => {
    res.send(user)
    })
    .catch(err => {
    res.status(500).send("Server error")}) 
});
module.exports = router