const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


mongoose.connect('mongodb://127.0.0.1:27017/postDetail',{ useNewUrlParser: true},(err,res)=>{
    if (err) throw err
    else{
        console.log('connected successfully');
    }
    
})


app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use('/blog',require('./post/post.routes'))
app.use('/user',require('./user/user.routes'))
app.use('/comment',require('./comment/comment.routes'))

app.listen(5005,(err,res)=>{
    if (err) throw err
    else{
        console.log('server running on port number 5005')
    }
})  
