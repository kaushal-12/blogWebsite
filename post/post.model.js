var mongoose = require('mongoose');
autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
  var Schema = mongoose.Schema;

  var blogSchema = new Schema({
    post:            String,
    date: { type:Number,default:new Date().getTime()},
    post_title:      String,
    author:          String,
    auther_userId:   Number,
    likeId:          String,
    picture_name:    String

});

blogSchema.plugin(autoIncrement.plugin, {
  model: 'Blog',
  field: 'postId',
  startAt: 1,
  incrementBy: 1
});

var Blog = mongoose.model('Blog', blogSchema);
module.exports=Blog