const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema= new Schema({
  email:{
    type: String
  },
  password:{
    type:String
  },
  pic:{
    type:String
  }
})

module.exports = UserSchema = mongoose.model('Users',UserSchema,'users')