const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: String,
    email: { type: String, required: true },
    googleId: String
}, {
    timestamps: true,
    }
);

module.exports = mongoose.model('User', userSchema);