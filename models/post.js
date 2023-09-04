const mongoose = require('mongoose');
const Schema =  mongoose.Schema

const post = new Schema({title: {type:"string", required: true}, snippet: {type:"string", required: true}, post: {type:"string", required: true}}, {timestamps: true});

const Blog = mongoose.model("Blog", post);

module.exports= Blog;