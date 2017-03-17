var mongoose 		  = require('mongoose');

var Schema 			  = mongoose.Schema;
var billCommentSchema = new Schema({

	comment:           String,
	// #TODO: Not comment yeas, but bill yeas
	comment_yeas:      Number,
	comment_nays:      Number,
	// ***************************
	bill_id:   	       Number,
	user_email:        String,
	user_name:         String,
	user_picture: 	   String,
	date:              {type: Date, default: Date.now}
	
});

var billComment = mongoose.model('billComment', billCommentSchema);

module.exports = billComment;


