// NO MORE EDITS NECESSARY

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({

    title: {type: String, require: true},
    
    author: {type: String, require: true},
    
    description: String,
    
    img: {type: String, reuire: true},

    link: {type: String, require: true},

});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;