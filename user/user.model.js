var mongoose = require('mongoose');
autoIncrement.initialize(mongoose);
  var Schema = mongoose.Schema;

  var userSchema = new Schema({
    name:   String,
    emailId: String,
    userName: String,
    userPassword: String,
    userPic: String

});
userSchema.plugin(autoIncrement.plugin, {
  model: 'User',
  field: 'userId',
  startAt: 1,
  incrementBy: 1
});


var User = mongoose.model('User', userSchema, 'User');
module.exports = User