const mongooose = require('mongoose');

const blogSchema = new mongooose.Schema({
    // Your code goes here
    author:String,
    location:String,
    likes:{type:Number,default:0},
    description:String,
    image:String,
    date:{type:String,default:"2022/12/17"}
})

const Blog = mongooose.model('blogs', blogSchema);

module.exports = Blog;