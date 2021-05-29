const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const commentSchema = new Schema({
    content: String,
}, {
    timestamps: true,
    }
);


const movieSchema = new Schema({
    title: String,
    rottenTomatoes: Number,
    comment: [commentSchema]
}, {
    timestamps: true,
    }
);

module.exports = mongoose.model('Movie', movieSchema);

