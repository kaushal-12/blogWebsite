const express = require('express');
const router = express.Router();
const post = require('./user.controller');



 router.post('/userPost',post.createUser);
 router.get('/userGet/:id',post.getUserById);
 router.put('/userUpdate/:id',post.updateById)
router.delete('/userDelete/:id',post.deleteById)

 module.exports = router