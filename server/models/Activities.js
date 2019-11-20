const mongoose = require('mongoose');

let Activities = new mongoose.Schema({
    title: {
        type: String,
    },
    image: {
        type: String
    }
})

module.exports = Activities = mongoose.model('Activities', Activities, 'activities')