var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var billCommentSchema = new Schema({

	comment_id:{
		type: Number,
		required: true,
		unique: true
	},

	comment:           String,
	bill_id:   	       Number,
	user_email:        String,
	user_name:         String,
});

var billComment = mongoose.model('billComment', billSchema);

module.exports = billComment;


