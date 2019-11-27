const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema= new mongoose.Schema({
  email:{
    type: String
  },
  password:{
    type:String
  },
  pic:{
    pic:String
  }
})

module.exports = UserSchema = mongoose.model('Users',UserSchema,'users')