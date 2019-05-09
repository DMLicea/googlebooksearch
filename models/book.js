/// THIS SHOULD BE FINE, DO NOT TOUCH THIS ANY MORE

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({

    title: {type: String, require: true},
    
    authors: {type: String, require: true},
    
    description: {type: String, require: true},
    
    img: {type: String, reuire: true},

    link: {type: String, require: true},

});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;