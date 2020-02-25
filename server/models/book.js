// require book model packages
const mongoose = require('mongoose');

// initiate book Schema
const Schema = mongoose.Schema;

// book Schema definition
const bookSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    content:{
        type: String,
        default: 'n/a'
    },
    pages:{
        type: String,
        default: 'n/a'
    },
    rating:{
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    price:{
        type: String,
        default: 'n/a'
    },
    ownerId:{
        type: Schema.Types.ObjectId,
        ref:'User',
        required: true
    }
}, {timestamps: true});


// book model initialization
const Book = mongoose.model('Book', bookSchema);

//Book model export
module.exports = {Book}