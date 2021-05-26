const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const friendSchema = new Schema({
    firstName: String,
    lastName: String,
}, {
    timestamps: true,
    }
);

module.exports = mongoose.model('Friend', friendSchema);