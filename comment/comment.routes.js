const express = require('express');
const router = express.Router();
const blogComment = require('./comment.controoler');



 router.post('/postComment',blogComment.createComment);
 router.get('/getComment/:id', blogComment.getCommentById);
router.put('/editComment/:id',blogComment.putBycommentId);
router.delete('/deleteComment/:id',blogComment.deleteByCommentId);


 module.exports = router