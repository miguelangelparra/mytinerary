const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
  pic: {
    type: String
  },
  userName: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  country: {
    type: String
  }
});

module.exports = UserSchema = mongoose.model('Users', UserSchema, 'users');
