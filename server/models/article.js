var mongoose        = require('mongoose');

var ArticleSchema = new mongoose.Schema({
    name : {
        type: String,
        unique: true,
        required: true,
    },
    description: {
        type: String,
        unique: true, 
        required: true,
    },
    prix: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

var Article = mongoose.model('Article', ArticleSchema);
module.exports = Article;