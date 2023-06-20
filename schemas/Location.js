const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    "lat": {
        type: Number
    },
    "lng": {
        type: Number
    },
    "creator": {
        type: String,
        required: true
    },
});

module.exports = mongoose.model("Location", locationSchema);