var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var billCommentSchema = new Schema({
	
	comment:           String,
	bill_id:   	       Number,
	user_email:        String,
	user_name:         String
});

var billComment = mongoose.model('billComment', billSchema);

module.exports = billComment;


