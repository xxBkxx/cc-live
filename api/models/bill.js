var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var billSchema = new Schema({

	id:{
		type: Number,
		required: true,
		unique: true
	},
	title:        	   String,
	parliament:   	   Number,
	session:      	   Number,
	introduced:        String,
	number : 	       String,
	type   :           String,
	sponsorer: 	       String,
	publications:      String,
	publications_link: String,
	event: 		  	   String,
	yea:  		       Number,
	nay: 		       Number
});

billSchema.pre('save', function(next){

	var currentDate = new Date();

	this.created = currentDate;

	if (!this.created){
		this.created = currentDate;
	}

	next();
	
});



billSchema.methods.summary = function(){
	var summary = this.title + '\n' + this.id;
	return summary;
};

var bill = mongoose.model('bill', billSchema);

module.exports = bill;


