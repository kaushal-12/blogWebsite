const express = require('express');
const router = express.Router();
const post = require('./post.controller');



 router.post('/post',post.createBlog);
 router.get('/get/:id',post.getBlogById)
 router.put('/put/:id',post.putById)
 router.delete('/delete/:id',post.deleteById)

module.exports = router