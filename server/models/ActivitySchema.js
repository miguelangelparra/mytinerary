const mongoose = require('mongoose');

//Schema de actividades
let ActivitySchema = new mongoose.Schema({
    title: {
        type: String,
    },
    image: {
        type: String
    }
})
//Exporta como "ActivitySchema" el modelo Mongoose, pasa por parametro "1)nombre de Schema",2)Schema,3)nombre de coleccion"
module.exports = ActivitySchema = mongoose.model('Activities', ActivitySchema, 'activities')