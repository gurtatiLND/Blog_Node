const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//first of all create schema for our blog, which defines the structure
const blogSchema = new Schema({
    title: {
       type: String,
       required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true }); //automatically generates time stamps properties for us

//second, create model for our schema
const Blog = mongoose.model('Blog', blogSchema);
//now we should export this model
module.exports = Blog;
