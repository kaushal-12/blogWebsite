var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var commentSchema = new Schema({
    comment:   String,
    date: { type: Date, default: Date.now },
    commentedBy: String,
    comment_like: Number,    
    post_Id: String


});

commentSchema.plugin(autoIncrement.plugin, {
  model: 'Comment',
  field: 'comment_byId',
  startAt: 1,
  incrementBy: 1

})
var Comment = mongoose.model('Comment', commentSchema, 'Comment');
module.exports = Comment    