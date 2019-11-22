const mongoose = require('mongoose');

let ActivitySchema = new mongoose.Schema({
    title: {
        type: String,
    },
    image: {
        type: String
    }
})

module.exports = ActivitySchema = mongoose.model('Activities', ActivitySchema, 'activities')