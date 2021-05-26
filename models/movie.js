const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const movieSchema = new Schema({
    title: String,
    rottenTomatoes: Number,
    cast: [String],
}, {
    timestamps: true,
    }
);

module.exports = mongoose.model('Movie', movieSchema);

