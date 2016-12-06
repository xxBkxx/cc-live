var mongoose = require('mongoose');

var Schema =  mongoose.Schema;
var userSchema =  new Schema({

	bill_id:      String,
	date:         {type: Date, default: Date.now},
	user_email:   String,
	user_picture: String,
	user_name:    String,
	comment:      String,
	comment_yeas: String,
	comment_nays: String

});

var billComment = mongoose.model('userComment', userCommentSchema);

module.exports = userComment;