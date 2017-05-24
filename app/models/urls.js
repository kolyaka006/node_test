var mongoose = require('mongoose');

var UrlsSchema = mongoose.Schema({
    short: String,
    real: String,
    created_at: {
        type: Date,
        default: new Date()
    }
});

mongoose.model('Urls', UrlsSchema);