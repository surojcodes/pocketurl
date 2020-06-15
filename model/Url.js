const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({
    longUrl: {
        type: String,
        required: [true, 'Long URL is required.']
    },
    shortUrl: {
        type: String,
        required: [true, 'Short URL is required.']
    },
    code: {
        type: String,
        required: [true, 'Code is required.']
    },
    createdAt: {
        type: String,
        default: Date.now
    }
});

module.exports = mongoose.model('Url', UrlSchema);