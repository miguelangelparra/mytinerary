const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Schema de User
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
//Exporta como "UserSchema" el modelo Mongoose, pasa por parametro "1)nombre de Schema",2)Schema,3)nombre de coleccion"
module.exports = UserSchema = mongoose.model('Users', UserSchema, 'users');
